import React, {useEffect, useState} from 'react';
import {Image, Text} from 'react-native';
import {height, width} from 'react-native-dimension';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// import {useColors} from '../../GlobalStyle/color';
// import {font} from '../../GlobalStyle/font';

const homePlace = {
  description: 'Home',
  geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
};
const workPlace = {
  description: 'Work',
  geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
};

const InputFieldcode = React.forwardRef(
  (
    {
      placeholder,
      update,
      value,
      marginTop = 0,
      country,
      onBlur = () => {},
      onChangeText,
      editable = true,
      marginBottom = 0,
      higlightedBorder = false,
    },
    ref,
  ) => {
    const [search, setSearch] = useState('');
    // const color = useColors();
    const countryComponent = 'country:us';
    const queryObjectStreetAddress = {
      key: 'AIzaSyB-2G1uCLP9Zpcm6WrdSCH3k0pxTCoqkm0', //'AIzaSyDb2eXeP5DxeTLjjI4EWllYgYBMn73N0C0',
      language: 'en',
      components: country == 'us' ? countryComponent : '',
    };
    const queryObjectCity = {
      key: 'AIzaSyB-2G1uCLP9Zpcm6WrdSCH3k0pxTCoqkm0',
      language: 'en', // language of the results
      components: country == 'us' ? countryComponent : '',
      types: '(regions)', // default: 'geocode'
    };
    const queryObjectState = {
      key: 'AIzaSyB-2G1uCLP9Zpcm6WrdSCH3k0pxTCoqkm0',
      language: 'en', // language of the results
      components: country == 'us' ? countryComponent : '',
      types: '(cities)', // default: 'geocode'
    };
    return (
      <GooglePlacesAutocomplete
        placeholder={placeholder}
        ref={ref}
        listViewDisplayed={'auto'}
        numberOfLines={1}
        minLength={2} // minimum length of text to search
        autoFocus={true}
        returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
        keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
        //   listViewDisplayed='' // true/false/undefined
        fetchDetails={true}
        renderDescription={row => row.description} // custom description render
        onPress={(data, details) => {
          let city_code;
          let state_code = details.address_components.filter(
            data =>
              data?.long_name?.length &&
              data?.types?.includes('administrative_area_level_1'),
          );
          let country_code = details.address_components.filter(
            data =>
              data?.types?.includes('country') &&
              data?.types?.includes('political'),
          );
          if (country_code[0]?.short_name == 'GB')
            city_code = details.address_components.filter(data =>
              data?.types?.includes('postal_town'),
            );
          else
            city_code = details.address_components.filter(
              data =>
                data?.types?.includes('locality') &&
                data?.types?.includes('political'),
            );

          let postal_code = details.address_components.filter(data =>
            data.types?.includes('postal_code'),
          );

          const state =
            country_code[0]?.short_name == 'GB'
              ? details.address_components.filter(
                  data =>
                    data?.types?.includes('administrative_area_level_2') &&
                    data?.types?.includes('political'),
                )[0].short_name
              : state_code[0]
              ? state_code[0]?.short_name
              : city_code[0]?.short_name;

          switch (placeholder) {
            case 'Street Address*':
              {
                let object = {
                  address: data.description,
                  state,
                  city: city_code[0]?.long_name,
                  country: country_code[0]?.long_name,
                  postalCode: postal_code[0]?.short_name,
                };
                update(object);
              }
              break;
            case 'Street Address':
              {
                let object = {
                  address: data.description,
                  state,
                  city: city_code[0]?.long_name,
                  country: country_code[0]?.long_name,
                  postalCode: postal_code[0]?.short_name,
                };
                update(object);
              }
              break;
            case 'City':
              {
                if (city_code.length > 0)
                  update('city', city_code[0].long_name);
                if (state_code) update('state', state);
                if (country_code)
                  update('country', country_code[0]?.short_name);
                if (postal_code)
                  update('postal_code', postal_code[0]?.short_name);
              }
              break;
            case 'State':
              {
                state_code.length > 0
                  ? update('state', state_code[0].short_name)
                  : update('state', data.description);
              }
              break;
            // case 'Country':
            //     {
            //         if (country_code) update('country', country_code[0]?.short_name)
            //     }
            //     break;
            default:
              break;
          }
        }}
        onFail={er => {
          console.log('error here ', er);
        }}
        value={value}
        underlineColorAndroid="transparent"
        placeholderTextColor={color.borderColor}
        // selectionColor={Colors.white}
        query={
          placeholder == 'Street Address' || placeholder === 'Street Address*'
            ? queryObjectStreetAddress
            : placeholder == 'City'
            ? queryObjectCity
            : queryObjectState
        }
        textInputProps={{
          value: value,
          selectionColor: color.darkGreen,
          editable: editable,
          placeholderTextColor: color.borderColor1,
          onBlur: () => {
            if (search == '') {
              onBlur();
            }
          },
          onChangeText: text => {
            onChangeText && onChangeText(text);
            setSearch(text);
          },
        }}
        styles={{
          textInputContainer: {
            flex: 1,
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            borderBottomWidth: 0,
            marginTop: marginTop,
            marginBottom: marginBottom,
          },
          description: {
            fontWeight: 'normal',
            color: 'black',
          },
          textInput: {
            width: width(82),
            borderColor: higlightedBorder
              ? color.background3
              : color.borderColor,
            borderWidth: higlightedBorder ? 2 : 2.5,
            height: height(5.2),
            borderRadius: width(1.5),
            backgroundColor: color.background,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 9,
            fontSize: 14,
            fontFamily: font.one.Medium,
            fontWeight: '500',
            color: color.textColor2,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
          listView: {
            flex: 1,
            // zIndex: 9999,
            backgroundColor: '#FFFFFF',
          },
        }}
        // currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
        // currentLocationLabel="Current location"
        nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        // GoogleReverseGeocodingQuery={{
        //     // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
        // }}
        // GooglePlacesSearchQuery={{
        //     // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        //     rankby: 'distance',
        // }}

        // GooglePlacesDetailsQuery={{
        //     // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
        //     fields: 'formatted_address',
        // }}

        // filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
        // predefinedPlaces={[homePlace, workPlace]}

        debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
        // renderLeftButton={() => <Image source={require('path/custom/left-icon')} />}
        // renderRightButton={() => <Text></Text>}
      />
    );
  },
);
export default InputFieldcode;