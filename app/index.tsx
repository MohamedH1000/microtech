import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

const index = () => {
  useEffect(() => {
    const getAccounts = async () => {
      const response = await axios.get("/(api)/accounts");
      console.log(response);
      return response;
    };

    getAccounts();
  }, []);

  return (
    <SafeAreaView>
      <View className="flex justify-center items-center h-full">
        <Text className="font-bold text-xl">
          Table of accounts and its balances
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
