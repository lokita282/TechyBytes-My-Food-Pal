import React from 'react';
import {Text, View, Dimensions, Animated} from 'react-native';
import Loginpage from './Loginpage';
import SignUpPage from './SignUpPage';
import SlidingUpPanel from 'rn-sliding-up-panel';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';

const {height} = Dimensions.get('window');

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  panel: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  panelHeader: {
    height: 180,
    backgroundColor: '#FCC13F',
    justifyContent: 'flex-end',
  },
  textHeader: {
    fontSize: 28,
    color: '#FB008B',
    textAlign: 'center',
    marginBottom: 20,
  },
  textHeader1: {
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 17,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -24,
    right: 18,
    width: 48,
    height: 48,
    zIndex: 1,
  },
  iconBg: {
    backgroundColor: '#FB008B',
    position: 'absolute',
    top: -24,
    right: 18,
    width: 48,
    height: 48,
    borderRadius: 24,
    zIndex: 1,
  },
};

class Slidingup extends React.Component {
  static defaultProps = {
    draggableRange: {top: height + 180 - 64, bottom: 180},
  };

  _draggedValue = new Animated.Value(180);

  render() {
    const {top, bottom} = this.props.draggableRange;

    const backgoundOpacity = this._draggedValue.interpolate({
      inputRange: [height - 48, height],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    const iconTranslateY = this._draggedValue.interpolate({
      inputRange: [height - 56, height, top],
      outputRange: [0, 56, 180 - 32],
      extrapolate: 'clamp',
    });

    const textTranslateY = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [0, 8],
      extrapolate: 'clamp',
    });

    const textTranslateX = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [0, -112],
      extrapolate: 'clamp',
    });

    const textScale = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [1, 0.7],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this._panel.show(360)}>
          <Loginpage />
        </TouchableOpacity>
        {/* <Text onPress={() => this._panel.show(360)}>Show panel</Text> */}
        <SlidingUpPanel
          ref={c => (this._panel = c)}
          draggableRange={this.props.draggableRange}
          animatedValue={this._draggedValue}
          snappingPoints={[360]}
          height={height + 180}
          friction={0.5}>
          <View style={styles.panel}>
            <Animated.View
              style={[
                styles.iconBg,
                {
                  opacity: backgoundOpacity,
                  transform: [{translateY: iconTranslateY}],
                },
              ]}
            />
            <View style={styles.panelHeader}>
              <Animated.View
                style={{
                  transform: [
                    {translateY: textTranslateY},
                    {translateX: textTranslateX},
                    {scale: textScale},
                  ],
                }}>
                <Text style={styles.textHeader1}>
                  Don't have an account yet?
                </Text>
                <Text style={styles.textHeader}>SignUp</Text>
              </Animated.View>
            </View>
            <View style={styles.container}>
              {/* <Text>Bottom sheet content</Text> */}
              <SignUpPage />
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}

export default Slidingup;
