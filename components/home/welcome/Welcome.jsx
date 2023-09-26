import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import styles from "./welcome.style";
import { useRouter } from "expo-router";
import { icons, SIZES } from "../../../constants";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>lala</Text>
        <Text style={styles.welcomeMessage}>hello</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for ?"
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={[styles.tabsContainer]} horizontal={true}>
        {jobTypes.map((earchJobType,index) => (
            <TouchableOpacity onPress={()=> {
              setActiveJobType(earchJobType)
              router.push(`/search/${earchJobType}`)
            }} key={index} style={[styles.tab(activeJobType, earchJobType), {marginRight: 10}]}>
              <Text style={styles.tabText(activeJobType, earchJobType)}>{earchJobType}</Text>
            </TouchableOpacity>
        ))}
      </ScrollView>
      {/* <View style={[styles.tabsContainer]}>
        <FlatList 
          data={jobTypes}
          renderItem={(item)=> (
            <TouchableOpacity onPress={()=> {
              setActiveJobType(item)
              router.push(`/search/${item}`)
            }} style={[styles.tab(activeJobType, item), {marginRight: 10}]}>
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View> */}
    </View>
  );
};

export default Welcome;
