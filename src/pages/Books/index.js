import React, {useState, useEffect} from 'react';
import {Text, ActivityIndicator} from 'react-native';

import api from '../../services/api';
import {useDispatch} from 'react-redux';
import * as BookActions from '../../store/modules/infoSingleBook/actions';

import Background from '../../component/Background';

import {
  Container,
  Header,
  SearchInput,
  Body,
  List,
  BookCover,
  BookButton,
  SubmitButton,
} from './styles';

export default function Books({navigation}) {
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadBooks() {
      const thumbBooks = [];
      const res = await api.get('SEARCH_TERM');
      res.data.items.map((r) => {
        return thumbBooks.push({
          id: r.id,
          smallThumbnail: r.volumeInfo.imageLinks.smallThumbnail,
        });
      });
      setBooks(thumbBooks);
    }
    loadBooks();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    const thumbBooks = [];
    const res = await api.get(`+intitle:${title}`);
    res.data.items.map((r) => {
      return thumbBooks.push({
        id: r.id,
        smallThumbnail: r.volumeInfo.imageLinks.smallThumbnail,
      });
    });
    setBooks(thumbBooks);
    setLoading(false);
  };

  const handleSingleBook = (id) => {
    dispatch(BookActions.saveInfoBook(id));
    navigation.navigate('SingleBook');
  };

  return (
    <Background>
      <Container>
        <Header>
          <SearchInput
            placeholder="Pesquise um título"
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
          <SubmitButton loading={loading} onPress={handleSearch}>
            {loading ? (
              <ActivityIndicator color="#000" />
            ) : (
              <Text>Pesquisar</Text>
            )}
          </SubmitButton>
        </Header>
        <Body>
          <List
            numColumns={3}
            data={books}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <BookButton onPress={() => handleSingleBook(item.id)}>
                <BookCover
                  source={{
                    uri: item.smallThumbnail,
                  }}
                />
              </BookButton>
            )}
          />
        </Body>
      </Container>
    </Background>
  );
}
