
import { FileSizeUnit, ConversionStandard } from '../types';

const FACTORS = {
    [ConversionStandard.BINARY]: 1024,
    [ConversionStandard.DECIMAL]: 1000,
};

const UNIT_POWERS: { [key in FileSizeUnit]: number } = {
    [FileSizeUnit.Bytes]: 0,
    [FileSizeUnit.KB]: 1,
    [FileSizeUnit.MB]: 2,
    [FileSizeUnit.GB]: 3,
    [FileSizeUnit.TB]: 4,
    [FileSizeUnit.PB]: 5,
};

export const convertToBytes = (value: number, fromUnit: FileSizeUnit, standard: ConversionStandard): number => {
    const factor = FACTORS[standard];
    const power = UNIT_POWERS[fromUnit];
    return value * Math.pow(factor, power);
};

export const convertFromBytes = (bytes: number, toUnit: FileSizeUnit, standard: ConversionStandard): number => {
    const factor = FACTORS[standard];
    const power = UNIT_POWERS[toUnit];
    if (power === 0) return bytes;
    return bytes / Math.pow(factor, power);
};

export const convertFileSize = (
    value: number,
    fromUnit: FileSizeUnit,
    toUnit: FileSizeUnit,
    standard: ConversionStandard
): number => {
    if (fromUnit === toUnit) {
        return value;
    }
    const bytes = convertToBytes(value, fromUnit, standard);
    return convertFromBytes(bytes, toUnit, standard);
};
