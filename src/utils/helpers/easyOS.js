const deviceOSEnum = {
    WINDOWS: 'windows',
    LINUX: 'linux',
    MACOS: 'macintosh',

    IOS: 'iPhone',
    ANDROID: 'android'
}

const deviceTagEnum = {
    MOBILE: 'mobile',
    DESKTOP: 'desktop',
    OTHER: 'other',
}

export function easyOS(data = '') {

    let deviceOS = deviceOSFinder(data);
    let deviceTag = deviceTagFinder(deviceOS);


    if (deviceOS !== undefined || deviceTag !== undefined) {
        return { deviceOS, deviceTag };
    }

    return undefined;
}

function match(data, regex) {
    return data.match(new RegExp(regex, 'i')); // => parametresi büyüküçük duyarlılık için regex'de
}

function deviceOSFinder(data) {
    const matchedOSList = [];

    for (const [key, value] of Object.entries(deviceOSEnum)) {
        if (match(data, value)) {
            matchedOSList.push(value);
        }
    }

    return matchedOSList[1] ? matchedOSList[1] : matchedOSList[0] ? matchedOSList[0] : undefined;
}

function deviceTagFinder(deviceOS) {
    let deviceTag = undefined

    if (deviceOS) {
        if (match(deviceOS, deviceOSEnum.WINDOWS) || match(deviceOS, deviceOSEnum.LINUX) || match(deviceOS, deviceOSEnum.MACOS)) {
            deviceTag = deviceTagEnum.DESKTOP;
        } else if (match(deviceOS, deviceOSEnum.IOS) || match(deviceOS, deviceOSEnum.ANDROID)) {
            deviceTag = deviceTagEnum.MOBILE;
        }
    }

    return deviceTag
}