import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

function Test(props) {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getReposHandler = () => {
    setIsLoading(true);
    axios('https://api.github.com/users/abdelrahmanayaad/repos')
      .then(res => {
        setRepos(res.data);
      })
      .catch(error => {
        console.log('error', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    /* Axios
    axios('https://api.github.com/users/abdelrahmanayaad/repos')
      .then(res => {
        setRepos(res.data);
      })
      .catch(error => {
        console.log('error', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    */

    /* Fetch
    fetch('https://api.github.com/users/abdelrahmanayaad/repos')
      .then(res => {
        console.log('First Response', res);
        if (res.ok) {
          return res.json();
        }
      })
      .then(res => {
        console.log('JSON Response', res);
        setRepos(res);
      })
      .catch(error => {
        console.log('error', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
      */
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={getReposHandler}>
        <Text style={styles.title}>GET</Text>
      </TouchableOpacity>
      {isLoading && <ActivityIndicator size={30} color="#000" />}
      <View>
        {repos.map(res => {
          return (
            <View style={styles.viewRepo}>
              <Text style={styles.title}>{res.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 40,
  },
  button: {
    width: 200,
    height: 70,
    backgroundColor: '#000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewRepo: {
    width: 300,
    height: 100,
    backgroundColor: '#0af',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
});

export default Test;
