import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

export default function InputOTP(props) {

    return (
        <OtpInput
            value={props.otp}
            onChange={props.setOtp}
            numInputs={4}
            // renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            inputStyle={{
                width: "48px", height: "56px", border: "1px solid #8A8A8A", borderRadius: "6px", backgroundColor: "#F3FBDF"
            }}
            containerStyle={{ gap: "16px", direction: "ltr" }}
        />
    );
}