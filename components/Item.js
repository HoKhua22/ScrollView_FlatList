import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native';
import { Divider } from 'react-native-elements';
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 15,
    marginHorizontal: 25,
    borderRadius: 4,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postBody: {
    padding: 20,
  },
  datePost: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  titlePost: {
    fontSize: 13,
  },
  textPost: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default ({
  item,
  onPress,
  backgroundColor,
  textColor,
  display,
  imgSource,
}) => {
  return (
    <View style={[styles.item, backgroundColor]}>
      <View style={{ padding: 20 }}>
        <TouchableOpacity style={styles.postHeader} onPress={onPress}>
          <View>
            <Text style={[styles.datePost, textColor]}>{item.date}</Text>
            <Text style={[textColor, { fontSize: 13 }]}>{item.time}</Text>
          </View>
          <Image source={imgSource} />
        </TouchableOpacity>
      </View>
      <Divider style={{ backgroundColor: '#808080', paddingTop: 1 }} />
      <View style={styles.postBody}>
        <Text style={styles.titlePost}>Job Name:</Text>
        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>{item.jobName}</Text>
        <View style={display}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginTop: 10,
            }}
          >
            <Text style={styles.titlePost}>
              Leave Type {'\n'}
              <Text style={{ fontWeight: 'bold' }}>{item.leaveType}</Text>
            </Text>
            <Text style={styles.titlePost}>
              Time Allowance {'\n'}
              <Text style={{ fontWeight: 'bold' }}>{item.timeAllowance}</Text>
            </Text>
            <Text style={styles.titlePost}>
              LAHA {'\n'}
              <Text style={{ fontWeight: 'bold' }}>{item.laha}</Text>
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.titlePost}>Description:</Text>
            <Text style={styles.textPost}>{item.description}</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.titlePost}>Payroll Notes</Text>
            <Text style={styles.textPost}>{item.payrol}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
