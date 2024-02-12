import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import {Text, Card, Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Antdesign from 'react-native-vector-icons/AntDesign';
import normalize from 'react-native-normalize';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../Assets/colors/colors';
import Modal from 'react-native-modal';
const CardOrganization = props => {
  const [title, setTitle] = useState();
  const [imageshow, setImage] = useState();
  const [institute, setInstitute] = useState();
  const [actiontrigerred, setActionTriggered] = useState();
  const showAlert = () => {
    Alert.alert('You need to...');
  };
  const data = [
    {
      id: 1,
      title: 'Cancer Support',
      institute: 'Community Central',
      image:
        'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2020-02/adobestock_144255497.jpeg.jpg?itok=IivRnSvt',
    },
    {
      id: 2,
      title: 'Peterson',
      institute: 'Center On Health Care',
      image:
        'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2020-02/adobestock_144255497.jpeg.jpg?itok=IivRnSvt',
    },
    {
      id: 2,
      title: 'National Human',
      institute: 'Trafficing Hotline',
      image:
        'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2020-02/adobestock_144255497.jpeg.jpg?itok=IivRnSvt',
    },
  ];
  const [isModalVisible, setModalVisible] = useState(false);
  //   const toggleModal = () => {
  //     setModalVisible(!isModalVisible);
  //   };
  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          padding: 10,
          marginTop: '-3%',
        }}>
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            //console.log(obj)
            return (
              <View style={styles.card}>
                <View style={styles.contentImg}>
                  <Image
                    style={styles.imgStyle}
                    source={{
                      uri: item.image,
                    }}
                  />
                </View>
                <View style={styles.contentContainer}>
                  <TouchableOpacity
                    style={styles.contentIcon}
                    onPress={() => {
                      setModalVisible(true);
                      setImage(item.image);
                      setTitle(item.title);
                      setInstitute(item.institute);
                      setActionTriggered('ShowModal');
                    }}>
                    <Entypo
                      name="dots-three-vertical"
                      style={styles.userStyle}
                      size={22}
                    />
                  </TouchableOpacity>
                  <Text style={styles.textheading}>{item.title}</Text>
                  <Text style={styles.contentStyle}>{item.institute}</Text>
                  <View style={styles.iconCont}>
                    <Icon
                      name="watch-later"
                      size={15}
                      style={styles.iconStyle}
                    />
                    <Text style={styles.iconText}>Anytime</Text>
                  </View>
                  <View style={styles.iconCont}>
                    <Icon
                      name="location-on"
                      size={17}
                      style={styles.iconStyle}
                    />
                    <Text style={styles.iconText}>Scheme 3 Rawalpindi</Text>
                  </View>
                  <View style={styles.iconCont}>
                    <Ionicons
                      name="ios-person-circle"
                      size={17}
                      style={styles.iconStyle}
                    />
                    <Text style={styles.iconText}>Role</Text>
                  </View>
                </View>
              </View>
            );
          }}
          keyExtractor={(d, index) => index.toString()}
        />

        <Modal
          transparent={true}
          isVisible={isModalVisible}
          style={{
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            marginLeft: 0,
            marginRight: 0,
          }}>
          {actiontrigerred === 'ShowModal' ? (
            <View
              style={{
                backgroundColor: 'transparent',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: '90%',
                  borderRadius: 20,

                  elevation: 250,
                }}>
                <LinearGradient
                  colors={[color.linTopClr, color.linMidClr, color.linBotClr]}
                  style={styles.linearGradientStyle}></LinearGradient>
                <Image
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 80,
                    position: 'absolute',
                    marginTop: 30,
                    marginStart: 115,
                  }}
                  source={{
                    uri: imageshow,
                  }}
                />
                <TouchableOpacity
                  style={{position: 'absolute'}}
                  onPress={() => {
                    setModalVisible(false);
                  }}>
                  <Antdesign
                    name="close"
                    size={25}
                    style={{
                      marginLeft: 290,
                      marginTop: 30,
                    }}
                    color={'white'}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    marginTop: 73,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    fontSize: 20,
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  {title}
                </Text>
                <Text
                  style={{
                    justifyContent: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'black',
                    marginTop: 1,
                    alignSelf: 'center',
                    textTransform: 'uppercase',
                  }}>
                  {institute}
                </Text>
                <Text
                  style={{
                    justifyContent: 'center',
                    fontSize: 18,
                    padding: 10,
                    color: 'black',
                    marginTop: 13,
                    alignSelf: 'center',
                  }}>
                  What would you like to do?
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    justifyContent: 'space-evenly',
                  }}>
                  <TouchableOpacity
                    style={{
                      width: 150,
                      height: 50,
                      backgroundColor: color.btnColor,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                    }}
                    onPress={() => {
                      setActionTriggered('Make primary');
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      Make Primary
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: 120,
                      height: 50,
                      backgroundColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                    }}
                    onPress={() => {
                      setActionTriggered('Leave');
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      Leave
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{marginTop: 40}}></View>
              </View>
            </View>
          ) : actiontrigerred === 'Leave' ? (
            <View
              style={{
                backgroundColor: 'transparent',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: '90%',
                  borderRadius: 20,

                  elevation: 250,
                }}>
                <LinearGradient
                  colors={[color.linTopClr, color.linMidClr, color.linBotClr]}
                  style={styles.linearGradientStyle}></LinearGradient>
                <Image
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 80,
                    position: 'absolute',
                    marginTop: 30,
                    marginStart: 115,
                  }}
                  source={{
                    uri: imageshow,
                  }}
                />
                <TouchableOpacity
                  style={{position: 'absolute'}}
                  onPress={() => {
                    setModalVisible(false);
                  }}>
                  <Antdesign
                    name="close"
                    size={25}
                    style={{
                      marginLeft: 290,
                      marginTop: 30,
                    }}
                    color={'white'}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    marginTop: 73,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    fontSize: 20,
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  {title}
                </Text>
                <Text
                  style={{
                    justifyContent: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'black',
                    marginTop: 1,
                    alignSelf: 'center',
                    textTransform: 'uppercase',
                  }}>
                  {institute}
                </Text>
                <Text
                  style={{
                    justifyContent: 'center',
                    fontSize: 17,
                    padding: 10,

                    color: 'black',
                    marginTop: 13,
                    alignSelf: 'center',
                  }}>
                  Are you sure you want to Leave {title} {institute}?
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    justifyContent: 'space-evenly',
                  }}>
                  <TouchableOpacity
                    style={{
                      width: 150,
                      height: 50,
                      backgroundColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                    }}
                    onPress={() => {
                      setActionTriggered('im sure');
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      Yes, I am sure
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: 120,
                      height: 50,
                      backgroundColor: 'grey',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                    }}
                    onPress={() => {
                      setModalVisible(false);
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{marginTop: 40}}></View>
              </View>
            </View>
          ) : actiontrigerred === 'im sure' ? (
            <View
              style={{
                backgroundColor: 'transparent',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: '80%',
                  borderRadius: 20,

                  elevation: 250,
                }}>
                <LinearGradient
                  colors={[color.linTopClr, color.linMidClr, color.linBotClr]}
                  style={styles.linearGradientStyle}></LinearGradient>

                <TouchableOpacity
                  style={{position: 'absolute'}}
                  onPress={() => {
                    setModalVisible(false);
                  }}>
                  <Antdesign
                    name="close"
                    size={25}
                    style={{
                      marginLeft: 260,
                      marginTop: 30,
                    }}
                    color={'white'}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    justifyContent: 'center',
                    fontSize: 17,
                    padding: 12,

                    color: 'black',
                    marginTop: 30,
                    alignSelf: 'center',
                  }}>
                  You are no longer a part of {title} {institute}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    justifyContent: 'space-around',
                  }}>
                  <TouchableOpacity
                    style={{
                      width: 120,
                      height: 50,
                      backgroundColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                    }}
                    onPress={() => {
                      setModalVisible(false);
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      Dissmiss
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{marginTop: 40}}></View>
              </View>
            </View>
          ) : actiontrigerred === 'Make primary' ? (
            <View
              style={{
                backgroundColor: 'transparent',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: '90%',
                  borderRadius: 20,

                  elevation: 250,
                }}>
                <LinearGradient
                  colors={[color.linTopClr, color.linMidClr, color.linBotClr]}
                  style={styles.linearGradientStyle}></LinearGradient>
                <Image
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 80,
                    position: 'absolute',
                    marginTop: 30,
                    marginStart: 115,
                  }}
                  source={{
                    uri: imageshow,
                  }}
                />
                <TouchableOpacity
                  style={{position: 'absolute'}}
                  onPress={() => {
                    setModalVisible(false);
                  }}>
                  <Antdesign
                    name="close"
                    size={25}
                    style={{
                      marginLeft: 290,
                      marginTop: 30,
                    }}
                    color={'white'}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    marginTop: 73,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    fontSize: 20,
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  {title}
                </Text>
                <Text
                  style={{
                    justifyContent: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'black',
                    marginTop: 1,
                    alignSelf: 'center',
                    textTransform: 'uppercase',
                  }}>
                  {institute}
                </Text>
                <Text
                  style={{
                    justifyContent: 'center',
                    fontSize: 17,
                    padding: 10,
                    color: 'black',
                    marginTop: 13,
                    alignSelf: 'center',
                  }}>
                  Are you sure you want to set {title} {institute} as your
                  primary Organization?
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    justifyContent: 'space-evenly',
                  }}>
                  <TouchableOpacity
                    style={{
                      width: 150,
                      height: 50,
                      backgroundColor: color.btnColor,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                    }}
                    onPress={() => {
                      setActionTriggered('PrimaryOk');
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      Make Primary
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: 120,
                      height: 50,
                      backgroundColor: 'grey',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                    }}
                    onPress={() => {
                      setModalVisible(false);
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{marginTop: 40}}></View>
              </View>
            </View>
          ) : actiontrigerred === 'PrimaryOk' ? (
            <View
              style={{
                backgroundColor: 'transparent',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: '80%',
                  borderRadius: 20,

                  elevation: 250,
                }}>
                <LinearGradient
                  colors={[color.linTopClr, color.linMidClr, color.linBotClr]}
                  style={styles.linearGradientStyle}></LinearGradient>

                <TouchableOpacity
                  style={{position: 'absolute'}}
                  onPress={() => {
                    setModalVisible(false);
                  }}>
                  <Antdesign
                    name="close"
                    size={25}
                    style={{
                      marginLeft: 260,
                      marginTop: 30,
                    }}
                    color={'white'}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    justifyContent: 'center',
                    fontSize: 17,
                    padding: 10,

                    color: 'black',
                    marginTop: 30,
                    alignSelf: 'center',
                  }}>
                  The {title} {institute} is now your primary Organization
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    justifyContent: 'space-around',
                  }}>
                  <TouchableOpacity
                    style={{
                      width: 120,
                      height: 50,
                      backgroundColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                    }}
                    onPress={() => {
                      setModalVisible(false);
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      Dissmiss
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{marginTop: 40}}></View>
              </View>
            </View>
          ) : (
            <View></View>
          )}
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  foo: {
    flex: 1,
    flexDirection: 'row',
    //  backgroundColor:"pink",
    marginBottom: 10,
    marginLeft: '1%',
    marginRight: '1%',
    width: '98%',
    padding: 5,
    borderRadius: 10,
    height: 165,
  },

  cardp2icon: {
    paddingLeft: '85%',
    WIDTH: '40%',
    //  backgroundColor:"orange",
  },
  boarder: {
    // backgroundColor: "pink",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  linearGradientStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: normalize(100),
    elevation: 0,
    paddingHorizontal: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  footer1: {
    width: '100%',
    height: 155,
    marginRight: 30,
    flexWrap: 'wrap',
  },
  cardp1: {
    // backgroundColor:"red",
    width: '35%',
    // backgroundColor:"green",
  },
  cardp2: {
    // backgroundColor:"green",
    width: '64%',
    marginLeft: '2%',
    // backgroundColor:"yellow",
    height: '100%',
  },
  cardp2iconsetting: {},

  textheadingend: {
    color: '#272075',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },

  textheading: {
    color: '#272071',
    fontSize: 18,
    lineHeight: 20,
    fontWeight: 'bold',
    //  paddingBottom:10,
    //  marginBottom:"0.4%",
  },

  cardp2end: {
    marginTop: '70%',
  },

  texthead: {
    marginTop: '14%',
  },

  contentContainer: {
    width: '64%',
    marginLeft: '3%',
  },

  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '99%',
    borderRadius: 10,
    paddingVertical: 5,
    paddingLeft: 5,
    paddingRight: 15,
    marginTop: 15,
    elevation: 0,
  },

  contentIcon: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginBottom: -10,
  },
  imgStyle: {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    height: '100%',
  },
  contentStyle: {
    width: '100%',
    flexWrap: 'wrap',
    fontSize: 13,
    lineHeight: 17,
  },
  contentImg: {
    width: '35%',
  },

  textheading: {
    color: '#272071',
    fontSize: 15,
    fontWeight: 'bold',
  },
  userStyle: {
    color: color.btnColor,
  },
  iconCont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  iconText: {
    fontSize: 12,
    paddingLeft: 5,
    color: color.default,
  },
  iconStyle: {
    color: color.btnColor,
  },
  modalView: {
    borderRadius: 12,
    width: '70%',
    alignSelf: 'center',
    backgroundColor: color.white,
  },
  modalHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  modalText: {
    color: color.btnColor,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 12,
  },
  modalBody: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  loginBtn: {
    backgroundColor: color.purple,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    width: '40%',
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.white,
  },
  iconStyle1: {
    fontSize: 55,
    color: color.btnColor,
    marginTop: -15,
  },
});

export default CardOrganization;
