import * as React from "react";
import { StyleSheet, View, ScrollView, Dimensions, Image } from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width;

class BackgroundCarousel extends React.Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      images:[1,2,3,4,5],
    };
    this.scrollRef = React.createRef();
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState(
        prev => ({
          selectedIndex:
            prev.selectedIndex === this.state.images.length - 1
              ? 0
              : prev.selectedIndex + 1
        }),
        () => {
          this.scrollRef.current.scrollTo({
            animated: true,
            x: DEVICE_WIDTH * this.state.selectedIndex,
            y: 0
          });
        }
      );
    }, 3000);
  };

  setSelectedIndex = event => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const selectedIndex = Math.floor(contentOffset.x / viewSize.width);
    this.setState({ selectedIndex });
  };

  render() {
    const { images } = this.state;
    const { selectedIndex } = this.state;
    return (
      <View style={{ height: "50%", width: "100%" }}>
        <ScrollView
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}
        >
         
            <Image
              style={styles.backgroundImage}
              source={require('../assets/mount1.png')}
            
            />
             <Image
              style={styles.backgroundImage}
              source={require('../assets/mount3.png')}
              
            />
             <Image
              style={styles.backgroundImage}
              source={require('../assets/mount2.png')}
            
            />
             <Image
              style={styles.backgroundImage}
              source={require('../assets/mount4.png')}
            
            />
             <Image
              style={styles.backgroundImage}
              source={require('../assets/mount1.png')}
            
            />
          
        </ScrollView>
        <View style={styles.circleDiv}>
          {images.map((image, i) => (
            <View
              style={[
                styles.whiteCircle,
                { opacity: i === selectedIndex ? 0.5 : 1 }
              ]}
              key={image}
              active={i === selectedIndex}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
    width: Dimensions.get("window").width
  },
  circleDiv: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 10,
    borderStyle:"solid"
  },
  whiteCircle: {
    width: 10,
    height: 10,
    borderRadius: 8,
    margin: 5,
    backgroundColor: "#fff",
    borderEndColor:"red"
  }
});

export  default BackgroundCarousel 
