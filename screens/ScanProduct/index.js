import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Linking
} from 'react-native';

import { Camera, useCameraDevices } from "react-native-vision-camera"

import {
    IconButton,
    TextButton
} from "../../components";

import {
    COLORS,
    SIZES,
    FONTS,
    icons,
    constants,
    images
} from "../../constants";

const ScanProduct = ({ navigation }) => {

    // State
    const [selectedOption, setSelectedOption] = React.useState(constants.scan_product_option.camera)

    // Camera
    const devices = useCameraDevices();
    const device = devices.back;

    React.useEffect(() => {
        requestCameraPermission()
    }, [])

    // Handler

    const requestCameraPermission = React.useCallback(async () =>  {
        const permission = await Camera.requestCameraPermission();

        if(permission === 'denied') await Linking.openSettings()
    }, [])

    // Render

    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    paddingTop: SIZES.padding * 2,
                    paddingBottom: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    alignItems: 'center',
                    backgroundColor: COLORS.light,
                    zIndex: 1
                }}
            >
                {/* Close */}
                <IconButton 
                    icon={icons.close}
                    onPress={() => navigation.goBack()}
                />

                {/* Title */}
                <Text
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        ...FONTS.h2
                    }}
                >
                    {selectedOption == constants.scan_product_option.camera ? "Scan Camera" : "Scan QR Code"}
                </Text>

                {/* Add. Options */}
                <IconButton
                    icon={icons.flash}
                    iconStyle={{
                        width: 25,
                        height: 25
                    }}
                />

                <IconButton
                    icon={icons.question_mark}
                    containerStyle={{
                        marginLeft: SIZES.base
                    }}
                    iconStyle={{
                        width: 25,
                        height: 25
                    }}
                />

            </View>
        )
    }

    function renderFooter() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 90,
                    paddingTop: SIZES.radius,
                    paddingHorizontal: SIZES.radius,
                    backgroundColor: COLORS.light 
                }}
            >
                <TextButton
                    label="Scan QR code"
                    contentContainerStyle={{
                        flex: 1,
                        height: 55,
                        borderRadius: SIZES.radius,
                        backgroundColor: selectedOption == constants.scan_product_option.qr ? COLORS.primary : COLORS.lightGrey
                    }}
                    labelStyle={{
                        ...FONTS.h3,
                        color: constants.scan_product_option.qr ? COLORS.secondary : COLORS.primary
                    }}
                    onPress={() => setSelectedOption(constants.scan_product_option.qr)}
                />

                <TextButton
                    label="Scan Camera"
                    contentContainerStyle={{
                        flex: 1,
                        height: 55,
                        marginLeft: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: selectedOption == constants.scan_product_option.camera ? COLORS.primary : COLORS.lightGrey
                    }}
                    labelStyle={{
                        ...FONTS.h3,
                        color: constants.scan_product_option.camera ? COLORS.secondary : COLORS.primary
                    }}
                    onPress={() => setSelectedOption(constants.scan_product_option.camera)}
                />
            </View>
        )
    }
    return (
        <View
            style={{
                flex: 1
            }}
        >
            {/* Header */}
            {renderHeader()}

            {/* Footer */}
            {renderFooter()}
        </View>
    )
}

export default ScanProduct;