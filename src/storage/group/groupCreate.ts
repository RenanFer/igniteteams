import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppError } from '@utils/AppError';

import { GROUP_COLLECTION } from '@storage/storageConfig';
import { groupGetAll } from './groupGetAll';

export async function groupCreate(newGroup: string) {
    try {
        const storedGroups = await groupGetAll();

        const groupAlreadyExists = storedGroups.includes(newGroup);

        if (groupAlreadyExists) {
            throw new AppError('Ja existe um grupo cadastrado com esse nome');
        }
        const storage = JSON.stringify([...storedGroups, newGroup]);

        await AsyncStorage.setItem(GROUP_COLLECTION, storage);
    } catch (err) {
        throw err;
    }
}
