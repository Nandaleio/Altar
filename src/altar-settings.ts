import { AltarBaseLayout } from "./layouts/altar-base-layout";
import { AltarAudioLayout } from "./layouts/audio/audio-layout";
import { AltarImageLayout } from "./layouts/image/image-layout";

const defaultSettings: AltarSettings[] = [
    {
        types: ["image/jpeg","image/png","image/gif","image/bmp","image/x-ms-bmp"],
        element: () => {
            return new AltarImageLayout();
        }
    },
    {
        types: ["audio/mpeg","audio/x-wav"],
        element: () => {
            return new AltarAudioLayout();
        }
    },
    {
        types: ["video/mp4","video/webm","video/x-m4v","video/quicktime","video/ogg"],
        element: () => {
            //return new VideoEditor();
            return new AltarAudioLayout();;
        }
    },
]

export class AltarConfig {

    private static settingsMap: AltarSettings[] = defaultSettings;

    public static overrideLayoutSettings(newSettings:  AltarSettings[]) {
        AltarConfig.settingsMap = newSettings;
    }

    public static getLayout(fileType: string): any {
        for (const _ of AltarConfig.settingsMap ?? defaultSettings) {
            if(_.types.includes(fileType)) return _.element();
        }
        throw new Error("No layout found for type: " + fileType);
    }

}

export interface AltarSettings {
    types: string[];
    element: () => AltarBaseLayout<any,any>;
}

