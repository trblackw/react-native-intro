import { View, Text, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export default class Hello extends Component {
   render() {
      console.log('hey')
		return (
			<View>
				<Text style={styles.hello}>heyyy</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	hello: {
		fontSize: 24,
      backgroundColor: 'red',
      fontVariant: ['small-caps']
	}
});
