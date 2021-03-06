import React, { Component, useState } from 'react';
import { Ionicons } from '@expo/vector-icons'
import { View, SafeAreaView, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import loginStyles from '../Login/style';

export default class CreateAccount extends Component {
    render() {
        return (
            <SafeAreaView style={loginStyles.container}>
                <KeyboardAvoidingView enabled={Platform.OS == 'ios'} behavior='position' keyboardVerticalOffset={100} >
                    <View>
                        <Text style={loginStyles.title}>Seja bem vindo !</Text>
                        <Text style={loginStyles.description}>Digite os dados abaixo para o cadastro</Text>
                    </View>
                    <View style={loginStyles.form}>
                        <Text style={loginStyles.formLabel}>Nome</Text>
                        <TextInput style={loginStyles.formInput} placeholder="Digite seu nome" />

                        <Text style={[loginStyles.formLabel, { marginTop: 40 }]}>Email</Text>
                        <TextInput style={loginStyles.formInput} placeholder="Digite seu email" />
                        
                        <Text style={[loginStyles.formLabel, { marginTop: 40 }]}>Senha</Text>
                        <TextInput secureTextEntry={true} style={loginStyles.formInput} placeholder="Digite sua senha" />
                    </View>
                    <View style={loginStyles.containerButtons}>
                        <TouchableScale
                            friction={90} //
                            tension={100} //
                            activeScale={0.95}
                            style={loginStyles.buttonLogin}
                            onPress={() => {}}
                        >
                            <Text style={loginStyles.buttonLoginText}>Criar conta</Text>
                        </TouchableScale>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}
