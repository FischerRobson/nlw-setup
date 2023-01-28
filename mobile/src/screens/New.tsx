import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";
import { Feather } from "@expo/vector-icons"
import colors from "tailwindcss/colors";

const availableWeekDays = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

export function New() {
  
  const [selectedWeekDays, setSelectedWeekDays] = useState<number[]>([]);

  function toggleWeekDay(weekDayIndex: number) {
    if (selectedWeekDays.includes(weekDayIndex)) {
      const newSelectedWeekDays = selectedWeekDays.filter(day => day !== weekDayIndex);
      setSelectedWeekDays(newSelectedWeekDays);
    } else {
      setSelectedWeekDays(prevState => [...prevState, weekDayIndex]);

    }
  }


  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <BackButton />
        <Text className="mt-6 text-white font-extrabold text-3xl">
          Criar hábito
        </Text>

        <Text className="mt-6 text-white font-semibold text-base">
          Qual seu comprometimento?
        </Text>

        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus:border-zinc-400"
          placeholderTextColor={colors.zinc[400]}
          placeholder="Dormir bem, beber água, etc..."         
        />
        
        <Text className="mt-4 mb-3 text-white font-semibold text-base">
          Qual a recorrência?
        </Text>

        {availableWeekDays.map((day, index) => {
          return (
            <Checkbox
              key={`${day}-${index}`}
              title={day}
              checked={selectedWeekDays.includes(index)}
              onPress={() => toggleWeekDay(index)}
            />
          )
        })}

        <TouchableOpacity className="flex-1 h-14 flex-row justify-center items-center bg-green-600 rounded-md mt-6">
          <Feather
            name="check"
            size={20}
            color={colors.white}
          />
          <Text className="ml-2 text-white font-semibold">
            Confirmar
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  )
}