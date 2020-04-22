import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 0 5px;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 10px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.5)',
})`
  flex: 1;
  height: 40px;
  border-radius: 4px;
  padding: 0 5px;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
`;

export const Body = styled.View`
  flex: 8;
  align-items: center;
`;

export const List = styled.FlatList`
  flex-wrap: wrap;
`;

export const BookButton = styled.TouchableOpacity``;

export const BookCover = styled.Image`
  margin: 7px;
  margin-bottom: 20px;
  height: 130px;
  width: 100px;
`;
