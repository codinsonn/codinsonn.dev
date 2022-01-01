import React from 'react';
import { StatusBar } from 'expo-status-bar';
// Navigation
import { AetherLink } from 'aetherspace/navigation';
// Primitives
import { AetherView, AetherText, AetherImage } from 'aetherspace/primitives';

/* --- <HomeScreen/> --------------------------------------------------------------------------- */

const HomeScreen = () => {
    return (
        <AetherView tw="flex-1 bg-white items-center justify-center">
            <StatusBar style="auto" />
            <AetherLink to="https://aetherspace-green-stack-starter-premium.vercel.app/author">
                <AetherImage
                    src="/img/icon.png"
                    tw={["w-20 h-20 mt-0 mb-3 overflow-hidden", true && "rounded-full"]} // Assign conditional classes with an array
                />
            </AetherLink>
            <AetherText tw="text-green-500 pb-5 font-bold text-base">Hello GREEN stack ✅</AetherText>
            <AetherText tw="px-5 text-center text-sm">
                Open up <AetherText tw="text-gray-500">apps/app/screens/HomeScreen.tsx</AetherText> to start working on your app
            </AetherText>
            <AetherLink href="/author" tw="text-gray-500 pt-5 text-center text-xs" asText>
                (Tap here or below to test navigation)
            </AetherLink>
            <AetherLink to="/author" tw="m-8">
                {'{ ...💚 }'}
            </AetherLink>
        </AetherView>
    );
};

/* --- Exports --------------------------------------------------------------------------------- */

export default HomeScreen;
