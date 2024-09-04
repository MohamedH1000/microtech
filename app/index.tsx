import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFetch } from "@/lib/fetch";

const index = () => {
  const { data, loading, error } = useFetch("(api)/accounts");
  console.log(data);

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
