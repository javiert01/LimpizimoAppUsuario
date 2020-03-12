import React, { useEffect, useState, useRef } from 'react';
import { Animated, Image, Picker, Platform, ScrollView, StatusBar, Text, View } from 'react-native';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import Touchable from 'react-native-platform-touchable';
import EStyleSheet from 'react-native-extended-stylesheet';
import DateTimePicker from '@react-native-community/datetimepicker';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useSelector, useDispatch } from 'react-redux';
import { DateTime } from 'luxon';

import { getPlaces } from '../../store/actions/places';
import { askForService, getServiceCostList } from '../../store/actions/services';
import { setRequestedService } from '../../store/actions/services';
import { connectToRoom, listenMessage } from '../../store/actions/webSockets';

import { strings } from '../../i18n';
import Images from '../../assets/images';
import styles from './styles';

const Home = props => {
  const [isNormalCleaningOptionSelected, setIsNormalCleaningOptionSelected] = useState(false);
  const [isDeepCleaningOptionSelected, setIsDeepCleaningOptionSelected] = useState(false);
  const [isOnceOptionSelected, setIsOnceOptionSelected] = useState(true);
  const [isFrequentOptionSelected, setIsFrequentOptionSelected] = useState(false);
  const [recurrenceOption, setRecurrenceOption] = useState(1);
  const [showDatepicker, setShowDatepicker] = useState(false);
  const [date, setDate] = useState(DateTime.local());
  const [serviceTypeDay, setServiceTypeDay] = useState('todayService');
  const [showTimepicker, setShowTimepicker] = useState(false);
  const [time, setTime] = useState(DateTime.local());
  const [dialogVisible, setDialogVisible] = useState(false);
  const places = useSelector(state => state.places.places);
  const serviceCostList = useSelector(state => state.services.serviceCostList);
  const [selectedPlaceId, setSelectedPlaceId] = useState();
  const dispatch = useDispatch();
  const availableHours = useSelector(state =>
    serviceCostList
      ? state.services.serviceCostList.map(service => {
          return parseInt(service.hours);
        })
      : [2, 4, 6, 8],
  );
  const [selectedHour, setSelectedHour] = useState();
  const availableCards = [
    {
      id: 1,
      name: 'Visa',
      owner: 'John Doe',
      number: '4111111111111111',
      expirationDate: '12/2020',
      cvv: 123,
    },
    {
      id: 2,
      name: 'Diners',
      owner: 'Lilian Potter',
      number: '1234567899859848',
      expirationDate: '12/2021',
      cvv: 456,
    },
  ];
  const [scrollArrowPosition] = useState(new Animated.Value(20));
  const [selectedCardId, setSelectedCardId] = useState(availableCards[0].id);
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [service, setService] = useState({
    frequency: strings('common.service.once'),
    date: date.toFormat('EEEE d MMM. yyyy'),
    time: `${time.toFormat('h:mma')} a ${time.plus({ hours: selectedHour }).toFormat('h:mma')}`,
    selectedCard: availableCards[0],
    calculatedPrice,
  });

  const runAnimation = () => {
    scrollArrowPosition.setValue(20);
    Animated.timing(scrollArrowPosition, {
      toValue: 40,
      duration: 500,
    }).start(() => runAnimation());
  };

  useEffect(() => {
    runAnimation();
    dispatch(getPlaces('5e5fcfd35fd1d60004a4a5a0'));
  }, []);

  useEffect(() => {
    if (places.length > 0) {
      setSelectedPlaceId(places[0].id);
      setService({ ...service, selectedPlace: places.find(place => place.id === places[0].id) });
    }
  }, [places]);

  useEffect(() => {
    serviceCostList && setSelectedHour(parseInt(serviceCostList[0].hours));
    serviceCostList && _setCalculatedPrice(serviceTypeDay, parseInt(serviceCostList[0].hours));
  }, [serviceCostList]);

  useEffect(() => {
    selectedPlaceId &&
      dispatch(getServiceCostList(isNormalCleaningOptionSelected ? 'normal' : 'deep', places.find(place => place.id === selectedPlaceId).sizePlace));
  }, [selectedPlaceId]);

  useEffect(() => {
    service && dispatch(setRequestedService(service));
  }, [service]);

  const _renderNormalCleaningImage = () => (
    <View
      style={{
        ...styles.cleaningImageContainer,
        backgroundColor: isNormalCleaningOptionSelected ? EStyleSheet.value('$secondaryColor') : 'transparent',
        transform: [...styles.cleaningImageContainer.transform, { scale: isNormalCleaningOptionSelected ? 1.2 : 1 }],
      }}>
      <Image style={styles.cleaningImage} source={Images.normalCleaning} resizeMode="contain" />
    </View>
  );

  const _renderDeepCleaningImage = () => (
    <View
      style={{
        ...styles.cleaningImageContainer,
        backgroundColor: isDeepCleaningOptionSelected ? EStyleSheet.value('$secondaryColor') : 'transparent',
        transform: [...styles.cleaningImageContainer.transform, { scale: isDeepCleaningOptionSelected ? 1.2 : 1 }],
      }}>
      <Image style={styles.cleaningImage} source={Images.deepCleaning} resizeMode="contain" />
    </View>
  );

  const _renderOnceOption = () => (
    <Touchable
      style={{
        ...styles.optionContainer,
        backgroundColor: isOnceOptionSelected ? EStyleSheet.value('$secondaryColor') : 'transparent',
        width: isOnceOptionSelected ? '55%' : '45%',
      }}
      onPress={() => _toggleFrequencyOption(1)}>
      <Text style={styles.frequencyText}>{strings('common.service.once')}</Text>
    </Touchable>
  );

  const _renderFrequentOption = () => (
    <Touchable
      style={{
        ...styles.optionContainer,
        backgroundColor: isFrequentOptionSelected ? EStyleSheet.value('$secondaryColor') : 'transparent',
        width: isFrequentOptionSelected ? '55%' : '45%',
      }}
      onPress={() => _toggleFrequencyOption(2)}>
      <Text style={styles.frequencyText}>{strings('common.service.frequent')}</Text>
    </Touchable>
  );

  const _toggleCleaningOption = option => {
    if (option === 1) {
      setIsNormalCleaningOptionSelected(!isNormalCleaningOptionSelected);
      setIsDeepCleaningOptionSelected(false);
      dispatch(getServiceCostList('normal', places.find(place => place.id === selectedPlaceId).sizePlace));
      setService({ ...service, cleaningOption: isNormalCleaningOptionSelected ? null : strings('common.cleaning.normal') });
    } else {
      setIsDeepCleaningOptionSelected(!isDeepCleaningOptionSelected);
      setIsNormalCleaningOptionSelected(false);
      dispatch(getServiceCostList('deep', places.find(place => place.id === selectedPlaceId).sizePlace));
      setService({ ...service, cleaningOption: isDeepCleaningOptionSelected ? null : strings('common.cleaning.deep') });
    }
  };

  const _toggleFrequencyOption = option => {
    if (option === 1) {
      setIsOnceOptionSelected(true);
      setIsFrequentOptionSelected(false);
      setService({ ...service, frequency: strings('common.service.once') });
    } else {
      setIsFrequentOptionSelected(true);
      setIsOnceOptionSelected(false);
      setService({ ...service, frequency: strings('common.service.frequent') });
    }
  };

  const _setDate = newDate => {
    newDate = newDate || date.toJSDate();
    setShowDatepicker(Platform.OS === 'ios' ? true : false);
    setDate(DateTime.fromJSDate(newDate));
    if (DateTime.fromJSDate(newDate) > DateTime.local()) {
      setServiceTypeDay('futureService');
      _setCalculatedPrice('futureService', selectedHour);
    } else {
      setServiceTypeDay('todayService');
      _setCalculatedPrice('todayService', selectedHour);
    }
    setService({ ...service, date: DateTime.fromJSDate(newDate).toFormat('EEEE d MMM. yyyy') });
  };

  const _setTime = newTime => {
    newTime = newTime || time.toJSDate();
    setShowTimepicker(Platform.OS === 'ios' ? true : false);
    setTime(DateTime.fromJSDate(newTime));
    setService({
      ...service,
      time: `${DateTime.fromJSDate(newTime).toFormat('h:mma')} a ${DateTime.fromJSDate(newTime)
        .plus({ hours: selectedHour })
        .toFormat('h:mma')}`,
    });
  };

  const _setSelectedHour = hours => {
    setSelectedHour(hours);
    _setCalculatedPrice(serviceTypeDay, hours);
    setService({ ...service, time: `${time.toFormat('h:mma')} a ${time.plus({ hours }).toFormat('h:mma')}` });
  };

  const _setSelectedCard = cardId => {
    setSelectedCardId(cardId);
    setService({ ...service, selectedCard: availableCards.find(card => card.id === cardId) });
  };

  const _setCalculatedPrice = (serviceDayType, selectedHour) => {
    if (isDeepCleaningOptionSelected || isNormalCleaningOptionSelected) {
      for (let i = 0; i < serviceCostList.length; i++) {
        if (serviceCostList[i].hours === selectedHour.toString()) {
          setCalculatedPrice(serviceCostList[i][serviceDayType]);
          break;
        }
      }
    } else {
      setCalculatedPrice(0);
    }
  };

  const _renderPlaceImage = () => (
    <Image
      style={styles.placeOptionImage}
      source={selectedPlaceId === 0 ? Images.office : selectedPlaceId === 1 ? Images.house : Images.otherPlace}
      resizeMode="contain"
    />
  );

  const _renderPlacesPicker = () => {
    if (places.length > 0 && selectedPlaceId) {
      return (
        <View style={styles.placePickerInfoContainer}>
          <Picker selectedValue={selectedPlaceId} style={styles.placePicker} onValueChange={itemValue => setSelectedPlaceId(itemValue)}>
            {places.map(place => (
              <Picker.Item key={place.id} label={place.tipoDomicilio} value={place.id} />
            ))}
          </Picker>
          <Text style={styles.placeAddress}>{`${places.filter(place => place.id === selectedPlaceId)[0].calleSecundaria}, ${
            places.filter(place => place.id === selectedPlaceId)[0].city
          }`}</Text>
        </View>
      );
    }
  };

  const _openPopup = () => {
    setDialogVisible(true);
  };

  const _closePopup = () => {
    setDialogVisible(false);
  };

  const scrollView = useRef(null);
  const [rotate, setRotate] = useState({ transform: [{ rotate: '0deg' }] });
  const [maxOffset, setMaxOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);

  const _scroll = () => {
    if (yOffset === maxOffset) {
      scrollView.current.scrollTo({ x: 0, y: 0, animated: true });
    } else {
      scrollView.current.scrollToEnd();
    }
  };

  const _onScroll = event => {
    event.nativeEvent.contentOffset.y === 0 && setRotate({ transform: [{ rotate: '0deg' }] });
    const currentOffset = +(event.nativeEvent.contentOffset.y + event.nativeEvent.layoutMeasurement.height).toFixed(2);
    currentOffset === maxOffset && setRotate({ transform: [{ rotate: '180deg' }] });
    setYOffset(currentOffset);
  };

  useEffect(() => {
    !isDeepCleaningOptionSelected && !isNormalCleaningOptionSelected && scrollView.current.scrollTo({ x: 0, y: 0, animated: true });
  }, [isDeepCleaningOptionSelected, isNormalCleaningOptionSelected]);

  const _askForService = () => {
    const service = {
      habilidades: '5e5fceeb5fd1d60004a4a57b',
      usuario: '5e5fcfd35fd1d60004a4a5a0',
      estado: 'Pendiente',
      fechaInicio: date.toFormat('yyyy,MM,dd'),
      aux_id_domicilio: '5e5fcfeb5fd1d60004a4a5a2',
      duracion: selectedHour,
      costo: parseFloat(calculatedPrice),
      frecuencia: recurrenceOption,
      tipoFrecuencia: isOnceOptionSelected ? strings('common.service.once') : strings('common.service.frequent'),
      tipoLimpieza: isDeepCleaningOptionSelected
        ? `${strings('common.cleaning.main')} ${strings('common.cleaning.deep')}`
        : `${strings('common.cleaning.main')} ${strings('common.cleaning.normal')}`,
      nombreSala: 'sala1',
      horaInicio: time.toFormat('HH:mm'),
      horaFin: time.plus({ hours: selectedHour }).toFormat('HH:mm'),
    };
    dispatch(connectToRoom('sala1'));
    dispatch(connectToRoom('armando'));
    dispatch(listenMessage('servicio-asignado'));
    dispatch(askForService(service));
    props.navigation.navigate({
      routeName: 'ServiceStandby',
      key: 'ServiceStandby',
    });
  };

  let disabled = !service.cleaningOption;

  return (
    <View style={styles.container}>
      <Dialog visible={dialogVisible} onTouchOutside={_closePopup}>
        <DialogContent style={styles.popupContainer}>
          <View style={styles.popupImgContainer}>
            <Image source={Images.cleaningLady} style={styles.popupImg} resizeMode="contain" />
            <Text style={styles.messagePopupText}>{strings('common.selectCleaningType')}</Text>
          </View>
          <View style={styles.lineSeparator} />
          <Touchable style={styles.popupTouchable} onPress={_closePopup}>
            <View style={styles.popupTextContainer}>
              <Text style={styles.okPopupText}>{strings('common.understood').toUpperCase()}</Text>
            </View>
          </Touchable>
        </DialogContent>
      </Dialog>
      <StatusBar backgroundColor={EStyleSheet.value('$primaryColor')} barStyle="light-content" />
      <Text style={styles.greeting}>{strings('common.greeting', { name: 'Daniel' })}</Text>
      <ScrollView
        ref={scrollView}
        scrollEnabled={!disabled}
        showsVerticalScrollIndicator={true}
        onContentSizeChange={(_, height) => setMaxOffset(+height.toFixed(2))}
        onScroll={_onScroll}>
        <Text style={styles.serviceQuestion}>{strings('common.serviceQuestion')}</Text>
        <Text style={styles.cleaningType}>{strings('common.cleaningType')}</Text>
        <View style={styles.cleaningOptionsContainer}>
          <Touchable onPress={() => _toggleCleaningOption(1)}>
            <View style={styles.cleaningOption}>
              {_renderNormalCleaningImage()}
              <Text style={styles.cleaningMainText}>{strings('common.cleaning.main').toUpperCase()}</Text>
              <Text style={styles.cleaningDeepText}>{strings('common.cleaning.normal').toUpperCase()}</Text>
            </View>
          </Touchable>
          <Touchable onPress={() => _toggleCleaningOption(2)}>
            <View style={styles.cleaningOption}>
              {_renderDeepCleaningImage()}
              <Text style={styles.cleaningMainText}>{strings('common.cleaning.main').toUpperCase()}</Text>
              <Text style={styles.cleaningDeepText}>{strings('common.cleaning.deep').toUpperCase()}</Text>
            </View>
          </Touchable>
        </View>
        <View style={styles.bottomView}>
          {!disabled && (
            <View style={styles.frequency}>
              {_renderOnceOption()}
              {_renderFrequentOption()}
            </View>
          )}
          {!disabled && (
            <View style={styles.frequencyInfoContainer}>
              {isFrequentOptionSelected && (
                <View style={styles.frequencyOptionContainer}>
                  <Text style={styles.frequencyOptionText}>{strings('common.frequency.recurrence')}</Text>
                  <View style={styles.recurrencePickerContainer}>
                    <Picker
                      selectedValue={recurrenceOption}
                      style={styles.recurrencePicker}
                      onValueChange={itemValue => setRecurrenceOption(itemValue)}>
                      <Picker.Item label={strings('common.frequency.recurrenceOption1')} value={1} />
                      <Picker.Item label={strings('common.frequency.recurrenceOption2')} value={3} />
                    </Picker>
                  </View>
                </View>
              )}
              <View style={{ ...styles.frequencyOptionContainer, marginTop: isFrequentOptionSelected ? 8 : 0 }}>
                <Text style={styles.frequencyOptionText}>{strings('common.frequency.dayOfService')}</Text>
                <Touchable style={styles.dateTimePickerTouchableArea} onPress={() => setShowDatepicker(true)}>
                  <View style={styles.dateTimePickerContainer}>
                    <Image style={styles.dateTimePickerImage} source={Images.calendar} resizeMode="contain" />
                    <Text style={styles.dateTimePickerText}>{date.toFormat(isFrequentOptionSelected ? 'EEEE' : 'dd/MM/yyyy')}</Text>
                    {showDatepicker && (
                      <DateTimePicker
                        value={date.toJSDate()}
                        mode="date"
                        minimumDate={new Date()}
                        maximumDate={DateTime.local()
                          .plus({ days: 15 })
                          .toJSDate()}
                        onChange={(event, date) => _setDate(date)}
                      />
                    )}
                  </View>
                </Touchable>
              </View>
              <View style={{ ...styles.frequencyOptionContainer, marginTop: 8 }}>
                <Text style={styles.frequencyOptionText}>{strings('common.frequency.startOfService')}</Text>
                <Touchable style={styles.dateTimePickerTouchableArea} onPress={() => setShowTimepicker(true)}>
                  <View style={styles.dateTimePickerContainer}>
                    <Image style={styles.dateTimePickerImage} source={Images.clock} resizeMode="contain" />
                    <Text style={styles.dateTimePickerText}>{time.toFormat('HH:mm')}</Text>
                    {showTimepicker && <DateTimePicker value={time.toJSDate()} mode="time" onChange={(event, date) => _setTime(date)} />}
                  </View>
                </Touchable>
              </View>
              <Text style={styles.placeQuestion}>{strings('common.service.placeQuestion')}</Text>
              <View style={styles.placeOptionContainer}>
                <View style={styles.placeOptionImageContainer}>{_renderPlaceImage()}</View>
                {_renderPlacesPicker()}
              </View>
              <Text style={styles.serviceHours}>{strings('common.service.hours')}</Text>
              <View style={styles.serviceHoursOptionContainer}>
                <View style={styles.serviceHoursOptionImageContainer}>
                  <Image style={styles.serviceHoursOptionImage} source={Images.clock} resizeMode="contain" />
                </View>
                <View style={styles.serviceHoursPickerContainer}>
                  <Picker selectedValue={selectedHour} style={styles.serviceHoursPicker} onValueChange={itemValue => _setSelectedHour(itemValue)}>
                    {availableHours.map((hour, index) => (
                      <Picker.Item key={index} label={strings('common.service.selectedHours', { hour })} value={hour} />
                    ))}
                  </Picker>
                </View>
              </View>
              <View style={styles.cardOptionContainer}>
                <Image style={styles.cardOptionImage} source={Images.card} resizeMode="contain" />
                <View style={styles.cardPickerContainer}>
                  <Picker selectedValue={selectedCardId} style={styles.cardPicker} onValueChange={itemValue => _setSelectedCard(itemValue)}>
                    {availableCards.map((card, index) => (
                      <Picker.Item key={card.id} label={strings('common.service.cardEnd', { cardNumber: card.number.substr(12) })} value={card.id} />
                    ))}
                  </Picker>
                </View>
              </View>
            </View>
          )}
          <Touchable
            style={{ ...styles.askForButton, opacity: disabled ? 0.7 : 1, marginTop: disabled ? 0 : 'auto' }}
            onPress={disabled ? _openPopup : _askForService}>
            <View style={styles.askForButtonPartsContainer}>
              <View style={styles.askForButtonTopPart}>
                <Text style={styles.askForText}>{strings('common.service.askFor').toUpperCase()}</Text>
                <Text style={styles.now}>{strings('common.now').toUpperCase()}</Text>
              </View>
              <View style={styles.askForButtonBottomPart}>
                <Text style={styles.calculatedPrice}>{`$${calculatedPrice}`}</Text>
              </View>
            </View>
          </Touchable>
          <View style={styles.mapContainer}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              region={{
                latitude: -0.1832607 + 0.003,
                longitude: -78.4792473 - 0.003,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
              moveOnMarkerPress={false}
              zoomEnabled={false}
              rotateEnabled={false}
              scrollEnabled={false}>
              <Marker coordinate={{ latitude: -0.1832607, longitude: -78.4792473 }} image={Images.customMarker} />
            </MapView>
          </View>
        </View>
      </ScrollView>
      {!disabled && (
        <Animated.View style={{ ...styles.scrollArrow, bottom: scrollArrowPosition }}>
          <Touchable onPress={_scroll}>
            <Image style={{ ...styles.scrollArrowImage, ...rotate }} source={Images.whiteDownArrowV2} resizeMode="cover" />
          </Touchable>
        </Animated.View>
      )}
    </View>
  );
};

export default Home;
