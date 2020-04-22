import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import api from "../../services/api";

import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  const retrieveData = async () => {
    if (user.length === 0) {
      try {
        const value = await AsyncStorage.getItem("@BeBrideApp:user");
        if (value !== null) {
          setUser(JSON.parse(value));
        }
      } catch (error) {}
    }
    return;
  };

  const navigation = useNavigation();

  function navigateToDetails(event) {
    navigation.navigate("Detail", { event });
  }

  async function loadEvents() {
    if (loading) return;
    if (total > 0 && events.length === total) return;
    setLoading(true);
    const response = await api.get(`/events?page=${page + 1}&limit=5`);
    setLoading(false);
    setEvents([...events, ...response.data.data.docs]);
    setTotal(response.data.data.total);
    setPage(response.data.data.page);
  }

  useEffect(() => {
    retrieveData();
    loadEvents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logoImg} />
        <Text style={styles.headerText}>
          Total de
          <Text style={styles.headerTextBold}>{` ${total} eventos`}</Text>.
        </Text>
      </View>
      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.description}>
        Escolha um dos eventos abaixo para gerencia-lo.
      </Text>

      <FlatList
        data={events}
        style={styles.eventList}
        keyExtractor={(event) => String(event.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadEvents}
        onEndReachedThreshold={0.1}
        renderItem={({ item: event }) => (
          <View style={styles.event}>
            <Text style={styles.eventProperty}>Evento:</Text>
            <Text style={styles.eventValue}>{event.eventName}</Text>

            <Text style={styles.eventProperty}>Tipo:</Text>
            <Text style={styles.eventValue}>
              {event.EventTypes[0].eventTypeName}
            </Text>

            <Text style={styles.eventProperty}>Status:</Text>
            <Text style={styles.eventValue}>
              {event.EventStatus[0].eventStatusName}
            </Text>
            <TouchableOpacity
              style={styles.detailsButtom}
              onPress={() => navigateToDetails(event)}
            >
              <Text style={styles.detailsButtomText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
