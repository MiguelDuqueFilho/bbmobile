import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";

import styles from "./styles";

import logoImg from "../../assets/logo.png";

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const event = route.params.event;

  const message = `Olá Sr Fulano aqui é xxxxx da Bebride `;

  function navigateBack() {
    navigation.goBack();
  }

  function sendWhatsapp() {
    const phone = "+55 11 97475-0633";

    Linking.openURL(`whatsapp://send?phone=${phone}&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>
      <View style={styles.event}>
        <Text style={[styles.eventProperty, { marginTop: 0 }]}>Evento:</Text>
        <Text style={styles.eventValue}>{event.eventName}</Text>

        <Text style={styles.eventProperty}>Tipo:</Text>
        <Text style={styles.eventValue}>
          {event.EventTypes[0].eventTypeName}
        </Text>

        <Text style={styles.eventProperty}>Status:</Text>
        <Text style={styles.eventValue}>
          {event.EventStatus[0].eventStatusName}
        </Text>
      </View>
      <View style={styles.contentBox}>
        <Text style={styles.ContentTitle}>Tarefas do Evento</Text>
        <Text style={styles.ContentTitle}>e outros detalhes</Text>
        <Text style={styles.ContentDescription}>No Botão abaixo</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={() => {}}>
            <Text style={styles.actionText}>Tarefas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
