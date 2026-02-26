import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity,
  ListRenderItem
} from 'react-native';


// =======================================================
//                         Icons
// =======================================================

import LocationIcon from '@assets/icons/location.svg';



// Interface for type safety in your team project
interface Contact {
  id: string;
  name?: string;
  image?: string;
  isAddButton?: boolean;
}

const CONTACTS_DATA: Contact[] = [
  { id: '1', name: 'Sade', image: 'https://i.pravatar.cc/150?u=sade' },
  { id: '2', name: 'Bami', image: 'https://i.pravatar.cc/150?u=bami' },
  { id: '3', name: 'Felicia', image: 'https://i.pravatar.cc/150?u=felicia' },
  { id: '4', name: 'Felicia', image: 'https://i.pravatar.cc/150?u=sade' },
  { id: '5', name: 'Felicia', image: 'https://i.pravatar.cc/150?u=bami' },
  { id: '6', name: 'Felicia', image: 'https://i.pravatar.cc/150?u=felicia' },
  { id: '7', name: 'Felicia', image: 'https://i.pravatar.cc/150?u=sade' },
];

export default function TransferSection() {
  
  const renderItem: ListRenderItem<Contact> = ({ item }) => {
    if (item.isAddButton) {
      return (
        <View style={styles.itemContainer}>
          <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
            <Text style={styles.plusIcon}>+</Text>
          </TouchableOpacity>
          <Text style={styles.addText}>New</Text>
        </View>
      );
    }

    return (
      <View style={styles.itemContainer}>
        <Image 
          source={{ uri: item.image }} 
          style={styles.avatar} 
        />
        <Text style={styles.nameText}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Transfer to</Text>
        <TouchableOpacity>
          <Text style={styles.contactListLink}>Contact list  {'>'}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={[{ id: 'new-btn', isAddButton: true }, ...CONTACTS_DATA]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  contactListLink: {
    fontSize: 14,
    color: '#b56e5a', 
    fontWeight: '600',
  },
  listContent: {
    paddingLeft: 20,
    paddingRight: 10,
  },
  itemContainer: {
    alignItems: 'center',
    marginRight: 25,
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  plusIcon: {
    fontSize: 28,
    color: '#888',
    fontWeight: '300',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
    backgroundColor: '#f0f0f0',
  },
  addText: {
    fontSize: 14,
    color: '#888',
    fontWeight: '500',
  },
  nameText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
  },
});