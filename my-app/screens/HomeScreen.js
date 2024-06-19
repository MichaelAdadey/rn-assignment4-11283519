import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, ScrollView } from 'react-native';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const featuredJobs = [
    { id: '1', title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', logo: require('../assets/facebook.png') },
    { id: '2', title: 'Product Manager', company: 'Google', salary: '$160,000', location: 'London, UK', logo: require('../assets/google.png') },
    { id: '3', title: 'Data Scientist', company: 'Amazon', salary: '$150,000', location: 'Seattle, WA, US', logo: require('../assets/amazon.png') },
    { id: '4', title: 'UI/UX Designer', company: 'Spotify', salary: '$120,000', location: 'Stockholm, Sweden', logo: require('../assets/spotify.jpg') },
    { id: '5', title: 'Cybersecurity Analyst', company: 'Microsoft', salary: '$140,000', location: 'Redmond, WA, US', logo: require('../assets/microsoft.png') },
    { id: '6', title: 'Mobile App Developer', company: 'Uber', salary: '$130,000', location: 'San Francisco, CA, US', logo: require('../assets/uber.jpg') },
    { id: '7', title: 'DevOps Engineer', company: 'Netflix', salary: '$145,000', location: 'Los Gatos, CA, US', logo: require('../assets/netflix.jpg') },
    { id: '8', title: 'Blockchain Developer', company: 'Coinbase', salary: '$160,000', location: 'Remote', logo: require('../assets/coinbase.jpg') },
  ];

  const popularJobs = [
    { id: '1', title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', logo: require('../assets/burgerking.png') },
    { id: '2', title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US', logo: require('../assets/beats.png') },
    { id: '3', title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US', logo: require('../assets/facebook.png') },
    { id: '4', title: 'Marketing Specialist', company: 'Nike', salary: '$75,000/y', location: 'Portland, OR, US', logo: require('../assets/nike.jpg') },
    { id: '5', title: 'Sales Manager', company: 'Salesforce', salary: '$110,000/y', location: 'San Francisco, CA, US', logo: require('../assets/salesforce.png') },
    { id: '6', title: 'Human Resources Manager', company: 'Procter & Gamble', salary: '$95,000/y', location: 'Cincinnati, OH, US', logo: require('../assets/pg.png') },
    { id: '7', title: 'Financial Analyst', company: 'Goldman Sachs', salary: '$120,000/y', location: 'New York, NY, US', logo: require('../assets/goldmansachs.png') },
    { id: '8', title: 'Content Writer', company: 'BuzzFeed', salary: '$65,000/y', location: 'Los Angeles, CA, US', logo: require('../assets/buzzfeed.png') },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <Image source={{ uri: 'https://placekitten.com/50/50' }} style={styles.profileImage} />
      </View>
      <TextInput style={styles.searchInput} placeholder="Search a job or position" />
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <FlatList
        data={featuredJobs}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.jobCard}>
            <Image source={item.logo} style={styles.jobLogo} />
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={styles.jobCompany}>{item.company}</Text>
            <Text style={styles.jobSalary}>{item.salary}</Text>
            <Text style={styles.jobLocation}>{item.location}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <FlatList
        data={popularJobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.popularJobCard}>
            <Image source={item.logo} style={styles.popularJobLogo} />
            <View>
              <Text style={styles.popularJobTitle}>{item.title}</Text>
              <Text style={styles.popularJobCompany}>{item.company}</Text>
              <Text style={styles.popularJobSalary}>{item.salary}</Text>
              <Text style={styles.popularJobLocation}>{item.location}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#6b7280',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchInput: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  jobCard: {
    width: 280,
    height: 186,
    padding: 16,
    backgroundColor: '#e5f1fb',
    borderRadius: 8,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  jobLogo: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  jobCompany: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  jobSalary: {
    fontSize: 14,
    color: '#1d4ed8',
    marginBottom: 4,
  },
  jobLocation: {
    fontSize: 14,
    color: '#6b7280',
  },
  popularJobCard: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  popularJobLogo: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  popularJobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  popularJobCompany: {
    fontSize: 14,
    color: '#6b7280',
  },
  popularJobSalary: {
    fontSize: 14,
    color: '#1d4ed8',
  },
  popularJobLocation: {
    fontSize: 14,
    color: '#6b7280',
  },
});

export default HomeScreen;
