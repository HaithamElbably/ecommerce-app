import React from "react";
import { Text, View, StyleSheet} from "react-native";
import { useDynamicAnimation, MotiImage } from "moti";
import { SIZES, images } from "../../constants";

const Walkthrough3 = ({ animate }) => {
    // Moti initial position
    const motiImage1 = useDynamicAnimation(() => ({
        top: "38%",
        left: "17%"
    }))

    const motiImage2 = useDynamicAnimation(() => ({
        top: "40%",
        left: "47%"
    }))

    const motiImage3 = useDynamicAnimation(() => ({
        top: "46%",
        left: "37%"
    }))

    const motiImage4 = useDynamicAnimation(() => ({
        top: "32%",
        left: "27%"
    }))

    React.useEffect(() => {
        if(animate) {
            motiImage1.animateTo({
                top: "48%",
                left: "7%"
            })

            motiImage2.animateTo({
                top: "35%",
                left: "57%"
            })

            motiImage3.animateTo({
                top: "61%",
                left: "47%"
            })

            motiImage4.animateTo({
                top: "22%",
                left: "17%"
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
            <MotiImage  
                state={motiImage1}
                source={images.walkthrough_03_02}
                style={styles.image}
            />

            <MotiImage  
                state={motiImage2}
                source={images.walkthrough_03_01}
                style={styles.image}
            />

            <MotiImage  
                state={motiImage3}
                source={images.walkthrough_01_02}
                style={styles.image}
            />

            <MotiImage  
                state={motiImage4}
                source={images.walkthrough_01_01}
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

export default Walkthrough3;