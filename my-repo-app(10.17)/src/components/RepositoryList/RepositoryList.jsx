import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

// A placeholder component for a single repository item.
// You will replace this with your actual detailed item component later.
const RepositoryItem = ({ item }) => (
  <View style={styles.repositoryItem}>
    <Text style={styles.repositoryName}>{item.fullName}</Text>
    <Text style={styles.description}>{item.description}</Text>
    {/* Add more details here like stars, forks, etc. */}
  </View>
);

const RepositoryList = ({ repositories }) => {
  // Define a function to extract a unique key for each list item
  const renderItem = ({ item }) => (
    <RepositoryItem item={item} />
  );

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={renderItem}
      keyExtractor={item => item.id} // Assumes each repository has a unique 'id'
      contentContainerStyle={styles.listContainer}
      // Optional: Add an empty list component if the list is empty
      ListEmptyComponent={() => (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No repositories found.</Text>
        </View>
      )}
    />
  );
};

// --- Mock Data (for testing this template immediately) ---
// You would replace this array with actual data fetched from your API.
RepositoryList.defaultProps = {
  repositories: [
    { id: '1', fullName: 'Full Stack App', description: 'React Native + Express Demo', stars: 1612, forks: 300 },
    { id: '2', fullName: 'React Native Boilerplate', description: 'A starter kit for projects', stars: 250, forks: 50 },
    // Add more mock data here...
  ],
};

// --- Basic Styling ---
const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
    backgroundColor: '#fff',
  },
  repositoryItem: {
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    marginBottom: 10, // Added for visibility with the defaultProps mock
  },
  repositoryName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  separator: {
    height: 10,
    backgroundColor: 'transparent', // Invisible separator for spacing
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
  },
});

export default RepositoryList;