import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import * as S from './styles';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

export function NewGroup() {
    const [group, setGroup] = useState('');

    const navigation = useNavigation();

    function handleNew() {
        navigation.navigate('players', { group: group });
    }

    return (
        <S.Container>
            <Header showBackButton />
            <S.Content>
                <S.Icon />
                <Highlight
                    title="Nova turma"
                    subtitle="crie a turma para adicionar as pessoas "
                />
                <Input placeholder="Nome da turma" onChangeText={setGroup} />
                <Button
                    title="Criar"
                    style={{ marginTop: 20 }}
                    onPress={handleNew}
                />
            </S.Content>
        </S.Container>
    );
}
