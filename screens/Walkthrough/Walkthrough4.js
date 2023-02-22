import React from "react";
import { Text, View, Image, StyleSheet} from "react-native";
import { useDynamicAnimation, MotiImage } from "moti";
import { SIZES, images } from "../../constants";

const Walkthrough4 = ({ animate }) => {
    // Moti initial position
    const motiImage1 = useDynamicAnimation(() => ({
        top: "33%",
        left: "14%"
    }))

    const motiImage2 = useDynamicAnimation(() => ({
        top: "37%",
        left: "49%"
    }))

    const motiImage3 = useDynamicAnimation(() => ({
        top: "52%",
        left: "35%"
    }))

    React.useEffect(() => {
        if(animate) {
            motiImage1.animateTo({
                top: "8%",
                left: -20
            })

            motiImage2.animateTo({
                top: "23%",
                left: "90%"
            })

            motiImage3.animateTo({
                top: "83%",
                left: "86%"
            })

        }
    }, [animate])

    return (
        <View
            style={{
                flex: 1,
                overflow: 'hidden'
            }}
        >
            <Image 
                source={images.walkthrough_04_01}
                style={{
                    ...styles.image,
                    top: "23%",
                    left: "20%",
                    width: 245,
                    height: 340,
                    zIndex: -1
                }}
            />

            <MotiImage  
                state={motiImage1}
                source={images.walkthrough_04_02}
                style={styles.image}
            />

            <MotiImage  
                state={motiImage2}
                source={images.walkthrough_04_03}
                style={styles.image}
            />

            <MotiImage  
                state={motiImage3}
                source={images.walkthrough_04_04}
                style={styles.image}
            />

        </View>
    )
}




const styles = StyleSheet.create({
    image: {
        position: 'absolute',
        width: 140,
        height: 120,
        zIndex: 0,
        borderRadius: SIZES.radius
    }
})

export default Walkthrough4;