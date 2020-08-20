import React,{useState} from 'react';
import {Container, ScrollArea, Title, HeaderArea, Icon, InputArea, PickerArea, Input, PostButton, TextButton} from './styles';
import {Picker} from '@react-native-community/picker';
import {useNavigation} from '@react-navigation/native';

const PostHistoryScreen = () =>{
    const [categories, setCategories] = useState('Insert monster...');

    const navigation = useNavigation();

    const handleHistoriesButton = ()=>{
        navigation.navigate('Items');
    }

    return(
        <ScrollArea>

            <Container>
                <HeaderArea>
                    <Icon source={require('../../assets/pumpkin.png')}/>
                    <Title> | Post your history</Title>
                </HeaderArea>
                <InputArea>
                    <Input placeholder="Title..." />
                    <Input placeholder="Subscription..." />
                    <PickerArea>
                        <Picker  selectedValue={categories}
                                style={{height: 50, width: '100%'}} 
                                onValueChange={(itemValue, itemIndex) =>
                                    setCategories(itemValue)
                                }
                        >
                            <Picker.Item label="Werewolf" value="werewolf" />
                            <Picker.Item label="Ghost" value="ghost" />
                        </Picker>
                    </PickerArea>
                    <Input multiline={true} textAlignVertical='top' placeholder="History..." multiline={true} numberOfLines={10} style={{borderWidth:1, borderColor:'#fd9822', padding:20}}/>
                    <PostButton onPress={handleHistoriesButton}>
                        <TextButton>
                            Post
                        </TextButton>
                    </PostButton>
                </InputArea>
            </Container>
        </ScrollArea>
    );
}

export default PostHistoryScreen;