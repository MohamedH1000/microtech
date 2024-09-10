import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

const index = () => {
  const url = "localhost:808";
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const allAccounts = async () => {
      const response = await axios.get(`${url}/getaccounts`);
      setData(response);
      console.log(data);
      return response;
    };

    allAccounts();
  }, []);

  const topLevelAccounts = data.filter((d: any) => d.ACC_Parent === null);

  return (
    <SafeAreaView>
      <View className="flex justify-center items-center h-full">
        <Text className="font-bold text-xl">
          Table of accounts and its balances {data}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default index;
