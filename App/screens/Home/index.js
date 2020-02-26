import React, { useEffect, useState } from 'react';
import { Image, Picker, Platform, ScrollView, StatusBar, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import EStyleSheet from 'react-native-extended-stylesheet';
import DateTimePicker from '@react-native-community/datetimepicker';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useSelector, useDispatch } from 'react-redux';
import { DateTime } from 'luxon';

import { getPlaces } from '../../store/actions/places';
import { setRequestedService } from '../../store/actions/services';
import { askForService } from '../../store/actions/services';
import { connectToRoom, listenMessage } from '../../store/actions/webSockets';

import { strings } from '../../i18n';
import Images from '../../assets/images';
import CONSTANTS from '../../constants';
import styles from './styles';

const Home = props => {
  const [isNormalCleaningOptionSelected, setIsNormalCleaningOptionSelected] = useState(false);
  const [isDeepCleaningOptionSelected, setIsDeepCleaningOptionSelected] = useState(false);
  const [isOnceOptionSelected, setIsOnceOptionSelected] = useState(true);
  const [isFrequentOptionSelected, setIsFrequentOptionSelected] = useState(false);
  const [recurrenceOption, setRecurrenceOption] = useState(1);
  const [showDatepicker, setShowDatepicker] = useState(false);
  const [date, setDate] = useState(DateTime.local());
  const [showTimepicker, setShowTimepicker] = useState(false);
  const [time, setTime] = useState(DateTime.local());
  const places = useSelector(state => state.places.places);
  const [selectedPlaceId, setSelectedPlaceId] = useState();
  const dispatch = useDispatch();
  const [selectedHour, setSelectedHour] = useState(CONSTANTS.AVAILABLE_HOURS[0]);
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
  const [selectedCardId, setSelectedCardId] = useState(availableCards[0].id);
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [service, setService] = useState({
    frequency: strings('common.service.once'),
    date: date.toFormat('EEEE d MMM. yyyy'),
    time: `${time.toFormat('h:mma')} a ${time.plus({ hours: selectedHour }).toFormat('h:mma')}`,
    selectedCard: availableCards[0],
    calculatedPrice,
  });

  useEffect(() => {
    dispatch(getPlaces(1));
  }, []);

  useEffect(() => {
    setSelectedPlaceId(places.length ? places[0].id : 0);
    setService({ ...service, selectedPlace: places.find(place => place.id === (places.length ? places[0].id : 0)) });
  }, [places]);

  useEffect(() => {
    service && dispatch(setRequestedService(service));
  }, [service]);

  const _renderNormalCleaningImage = () => (
    <View
      style={{
        ...styles.cleaningImageContainer,
        backgroundColor: isNormalCleaningOptionSelected ? EStyleSheet.value('$secondaryColor') : 'transparent',
        transform: [...styles.cleaningImageContainer.transform, { scale: isNormalCleaningOptionSelected ? 1.3 : 1 }],
      }}>
      <Image style={styles.cleaningImage} source={Images.normalCleaning} resizeMode="contain" />
    </View>
  );

  const _renderDeepCleaningImage = () => (
    <View
      style={{
        ...styles.cleaningImageContainer,
        backgroundColor: isDeepCleaningOptionSelected ? EStyleSheet.value('$secondaryColor') : 'transparent',
        transform: [...styles.cleaningImageContainer.transform, { scale: isDeepCleaningOptionSelected ? 1.3 : 1 }],
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
      setService({ ...service, cleaningOption: isNormalCleaningOptionSelected ? null : strings('common.cleaning.normal') });
    } else {
      setIsDeepCleaningOptionSelected(!isDeepCleaningOptionSelected);
      setIsNormalCleaningOptionSelected(false);
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

  const _setSelectedPlace = placeId => {
    setSelectedPlaceId(placeId);
    setService({ ...service, selectedPlace: places.find(place => place.id === placeId) });
  };

  const _setSelectedHour = hours => {
    setSelectedHour(hours);
    setService({ ...service, time: `${time.toFormat('h:mma')} a ${time.plus({ hours }).toFormat('h:mma')}` });
  };

  const _setSelectedCard = cardId => {
    setSelectedCardId(cardId);
    setService({ ...service, selectedCard: availableCards.find(card => card.id === cardId) });
  };

  const _renderPlaceImage = () => (
    <Image
      style={styles.placeOptionImage}
      source={selectedPlaceId === 0 ? Images.office : selectedPlaceId === 1 ? Images.house : Images.otherPlace}
      resizeMode="contain"
    />
  );

  const _askForService = () => {
    const service = {
      habilidades: '5e39af19d570ae0004200587',
      usuario: '5e39b065d570ae00042005ac',
      estado: 'Pendiente',
      fechaInicio: date.toFormat('yyyy,MM,dd'),
      aux_id_domicilio: '5e10a2b818b18900044de346',
      duracion: selectedHour,
      costo: calculatedPrice,
      frecuencia: recurrenceOption,
      tipoFrecuencia: isOnceOptionSelected ? strings('common.service.once') : strings('common.service.frequent'),
      nombreSala: 'sala1',
      horaInicio: time.toFormat('HH:mm'),
      horaFin: time.plus({ hours: selectedHour }).toFormat('HH:mm')
    };
    dispatch(connectToRoom('sala1'));
    dispatch(connectToRoom('Armando'));
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
      <StatusBar backgroundColor={EStyleSheet.value('$primaryColor')} barStyle="light-content" />
      <Text style={styles.greeting}>{strings('common.greeting', { name: 'Daniel' })}</Text>
      <ScrollView>
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
          <View style={styles.frequency}>
            {_renderOnceOption()}
            {_renderFrequentOption()}
          </View>
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
            <View style={{ ...styles.frequencyOptionContainer, marginTop: isFrequentOptionSelected ? 10 : 0 }}>
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
            <View style={{ ...styles.frequencyOptionContainer, marginTop: 10 }}>
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
              <View style={styles.placePickerInfoContainer}>
                <Picker selectedValue={selectedPlaceId} style={styles.placePicker} onValueChange={itemValue => _setSelectedPlace(itemValue)}>
                  {places.map(place => (
                    <Picker.Item key={place.id} label={place.tipoDomicilio} value={place.id} />
                  ))}
                </Picker>
                {!!places.length && (
                  <Text style={styles.placeAddress}>{`${places[selectedPlaceId].callePrincipal}, ${places[selectedPlaceId].ciudad}`}</Text>
                )}
              </View>
            </View>
            <Text style={styles.serviceHours}>{strings('common.service.hours')}</Text>
            <View style={styles.serviceHoursOptionContainer}>
              <View style={styles.serviceHoursOptionImageContainer}>
                <Image style={styles.serviceHoursOptionImage} source={Images.clock} resizeMode="contain" />
              </View>
              <View style={styles.serviceHoursPickerContainer}>
                <Picker selectedValue={selectedHour} style={styles.serviceHoursPicker} onValueChange={itemValue => _setSelectedHour(itemValue)}>
                  {CONSTANTS.AVAILABLE_HOURS.map((hour, index) => (
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
          <Touchable style={{ ...styles.askForButton, opacity: disabled ? 0.7 : 1 }} onPress={_askForService} disabled={disabled}>
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
                latitude: -0.1832607,
                longitude: -78.4792473,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
              zoomEnabled={false}
              rotateEnabled={false}
              scrollEnabled={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
