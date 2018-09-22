import {
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    Animated,
    ImageBackground,
} from 'react-native';
import React, {Component} from 'react';
import Svg, {
    Path
} from 'react-native-svg';

let {width} = Dimensions.get('window');

export default class AwesomeTabbar extends Component {
    constructor(props) {
        super(props);
        this.offsetX = new Animated.Value(0);
        this.oneOffsetY = new Animated.Value(0);
        this.twoOffsetY = new Animated.Value(0);
        this.threeOffsetY = new Animated.Value(-10);
        this.fourOffsetY = new Animated.Value(0);
        this.fiveOffsetY = new Animated.Value(0);

        moveSelected = moveSelected.bind(this);
        animateIcon = animateIcon.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={[{backgroundColor: this.props.backgroundColor},styles.tabBarBack]}/>
                <Animated.View style={[{transform: [{translateX: this.offsetX}]}, styles.selectedContainer]}>
                    <Svg style={styles.curveContainer} version="1.1" width='128' height="64" x="0px" y="0px"
                         viewBox="0 0 128 64" space="preserve">
                        {/*<Path fill={this.props.backgroundColor} d="M125.3,64.2c-6.6-0.6-13.2-1.6-19.7-2.9c-2.5-0.5-5-1.1-7.4-2.2c-4.5-2-8.2-5.9-10.4-10.6C75.2,25.4,52.1,23.8,40,50.2V50*/}
	{/*c-2.2,4.3-5.9,7.8-10.4,9.6c-2.4,1-4.9,1.5-7.4,2c-6.5,1.2-13.1,2.1-19.7,2.6"/>*/}
                        <Path fill={this.props.backgroundColor} d="M128,64.2c-6.9-0.3-13.7-0.7-20.5-1.3c-2.6-0.2-5.2-0.5-7.7-1c-4.7-0.9-8.6-2.6-10.8-4.7C75.7,47,51.6,46.3,39.1,58v-0.1
	c-2.3,1.9-6.2,3.5-10.8,4.3c-2.5,0.4-5.1,0.7-7.7,0.9C13.7,63.6,6.9,64,0,64.2"/>

                    </Svg>
                    <ImageBackground style={{
                        position: 'absolute', alignSelf: 'center',
                        top: 26,width:56,height:56,alignItems:'center',justifyContent:'center'
                    }}
                    source={require('./shadow.png')}
                    >
                        <View style={[{backgroundColor: this.props.selectedColor},styles.roundedButton]}/>
                    </ImageBackground>

                </Animated.View>
                <View style={styles.tabBar}>
                    <TouchableOpacity onPress={() => {
                        this.props.onSelect(1);
                        moveSelected(1)
                    }} style={{width: width / 5, height: 56, alignItems: 'center', justifyContent: 'center'}}>
                        <Animated.View style={{transform: [{translateY: this.oneOffsetY}]}}>
                            {this.props.icons[0]}
                        </Animated.View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.onSelect(2);
                        moveSelected(2)
                    }} style={{width: width / 5, height: 56, alignItems: 'center', justifyContent: 'center'}}>
                        <Animated.View style={{transform: [{translateY: this.twoOffsetY}]}}>
                            {this.props.icons[1]}

                        </Animated.View>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.onSelect(3);
                        moveSelected(3)
                    }} style={{width: width / 5, height: 56, alignItems: 'center', justifyContent: 'center'}}>
                        <Animated.View style={{transform: [{translateY: this.threeOffsetY}]}}>
                            {this.props.icons[2]}
                        </Animated.View>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.onSelect(4);
                        moveSelected(4)
                    }} style={{width: width / 5, height: 56, alignItems: 'center', justifyContent: 'center'}}>
                        <Animated.View style={{transform: [{translateY: this.fourOffsetY}]}}>
                            {this.props.icons[3]}
                        </Animated.View>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.onSelect(5);
                        moveSelected(5)
                    }} style={{width: width / 5, height: 56, alignItems: 'center', justifyContent: 'center'}}>
                        <Animated.View style={{transform: [{translateY: this.fiveOffsetY}]}}>
                            {this.props.icons[4]}
                        </Animated.View>

                    </TouchableOpacity>
                </View>


            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: width,
        position: 'absolute',
        bottom: 0,
    },
    tabBarBack: {
        width: width,
        height: 56,
        alignSelf: 'center',
        flexDirection: 'row',
        position: 'absolute'

    },
    tabBar: {
        width: width,
        height: 56,
        alignSelf: 'center',
        flexDirection: 'row'

    },
    curveContainer: {

        alignSelf: 'center',
        position: 'absolute',
        top: -22,
        right: -35,
    },
    content: {
        flexDirection: "column",
        zIndex: 0,
        width: (Dimensions.get('window').width - 30),
        marginBottom: '4%',
        left: '4%',
        right: '4%',
    },
    selectedContainer: {
        width: 56,
        height: 56,
        position: 'absolute',
        alignSelf: 'center',
        bottom: 40,
    },
    roundedButton: {
        width: 52,
        height: 52,
        borderRadius: 26,
        top:4
    },
    subContent: {
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        zIndex: 1,
        position: 'absolute',
        bottom: 5,
    },
    navItem: {
        flex: 1,
        paddingTop: 6,
        paddingBottom: 6,
        alignItems: 'center',
        zIndex: 0,
    },
    navImage: {
        width: 45,
        height: 45,
    },
    circle: {
        bottom: 18,
    }
});

export function moveSelected(index) {
    let value: 0;
    animateIcon(-1);
    switch (index) {
        case 1: {
            value = -2 * (width / 5);
            break;
        }
        case 2: {
            value = -(width / 5);
            break;
        }
        case 3: {
            value = 0;
            break;
        }
        case 4: {
            value = (width / 5);
            break;
        }
        case 5: {
            value = 2 * (width / 5);
            break;
        }
    }

    Animated.parallel([
        Animated.timing(
            this.offsetX,
            {
                toValue: value,
                duration: 500,
            }
        ),
    ]).start(() => animateIcon(index));

}

export function animateIcon(index) {
    let value1: 0;
    let value2: 0;
    let value3: 0;
    let value4: 0;
    let value5: 0;

    if (index === 1) {
        value1 = -10;
    }
    else if (index === 2) {
        value2 = -10;
    }
    else if (index === 3) {
        value3 = -10;
    }
    else if (index === 4) {
        value4 = -10;
    }
    else if (index === 5) {
        value5 = -10;
    }

    Animated.parallel([
        Animated.timing(
            this.oneOffsetY,
            {
                toValue: value1,
                duration: 100,
                useNativeDriver: true
            }
        ),
        Animated.timing(
            this.twoOffsetY,
            {
                toValue: value2,
                duration: 100,
                useNativeDriver: true
            }
        ),
        Animated.timing(
            this.threeOffsetY,
            {
                toValue: value3,
                duration: 100,
                useNativeDriver: true
            }
        ),
        Animated.timing(
            this.fourOffsetY,
            {
                toValue: value4,
                duration: 100,
                useNativeDriver: true
            }
        ),
        Animated.timing(
            this.fiveOffsetY,
            {
                toValue: value5,
                duration: 100,
                useNativeDriver: true
            }
        )
    ]).start();
}