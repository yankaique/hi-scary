import React,{useState} from 'react';
import {Container,Title, HeaderArea, Icon,  InputArea, Input, PostButton, TextButton} from './styles';
import {Picker} from '@react-native-community/picker';
import {useNavigation} from '@react-navigation/native';

const PostHistoryScreen = () =>{
    const [categories, setCategories] = useState('');

    const navigation = useNavigation();

    const handleHistoriesButton = ()=>{
        navigation.navigate('Items');
    }

    return(
        <Container>
            <HeaderArea>
                <Icon source={require('../../assets/pumpkin.png')}/>
                <Title> | Post your history</Title>
            </HeaderArea>
            <InputArea>
                <Input placeholder="Title..." />
                <Input placeholder="Subscription..." />
                <Picker  selectedValue={categories}
                         style={{height: 50, width: '90%'}} 
                         onValueChange={(itemValue, itemIndex) =>
                            setCategories(itemValue)
                         }
                >
                    <Picker.Item label="Werewolf" value="werewolf" />
                    <Picker.Item label="Ghost" value="ghost" />
                </Picker>
                <Input placeholder="History..." multiline={true} numberOfLines={10}/>
                <PostButton onPress={handleHistoriesButton}>
                    <TextButton>
                        Post
                    </TextButton>
                </PostButton>
            </InputArea>
        </Container>
    );
}

export default PostHistoryScreen;