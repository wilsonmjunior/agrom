import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Bell, CheckCircle, AlertCircle, Info } from 'lucide-react-native';

export default function NotificationsScreen() {
  const notifications = [
    {
      id: 1,
      type: 'success',
      title: 'Verification Complete',
      message: 'Your identity has been successfully verified.',
      time: '2 hours ago',
      read: false,
    },
    {
      id: 2,
      type: 'warning',
      title: 'Document Update Required',
      message: 'Please update your ID document for continued access.',
      time: '5 hours ago',
      read: true,
    },
    {
      id: 3,
      type: 'info',
      title: 'Welcome to the App',
      message: 'Thank you for joining our community!',
      time: '1 day ago',
      read: true,
    },
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle size={24} color="#22c55e" />;
      case 'warning':
        return <AlertCircle size={24} color="#f59e0b" />;
      case 'info':
        return <Info size={24} color="#0066ff" />;
      default:
        return <Bell size={24} color="#71717a" />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notifications</Text>
        <TouchableOpacity>
          <Text style={styles.markAllRead}>Mark all as read</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {notifications.map((notification) => (
          <TouchableOpacity
            key={notification.id}
            style={[
              styles.notificationCard,
              !notification.read && styles.unreadCard,
            ]}
          >
            <View style={styles.notificationIcon}>
              {getNotificationIcon(notification.type)}
            </View>
            <View style={styles.notificationContent}>
              <View style={styles.notificationHeader}>
                <Text style={styles.notificationTitle}>{notification.title}</Text>
                {!notification.read && <View style={styles.unreadDot} />}
              </View>
              <Text style={styles.notificationMessage}>{notification.message}</Text>
              <Text style={styles.notificationTime}>{notification.time}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    color: '#18181b',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  markAllRead: {
    fontSize: 14,
    color: '#0066ff',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  content: {
    flex: 1,
    padding: 24,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  unreadCard: {
    backgroundColor: '#f0f7ff',
  },
  notificationIcon: {
    marginRight: 16,
  },
  notificationContent: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  notificationTitle: {
    fontSize: 16,
    color: '#18181b',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#71717a',
    fontFamily: 'PlusJakartaSans-Regular',
    marginBottom: 8,
  },
  notificationTime: {
    fontSize: 12,
    color: '#a1a1aa',
    fontFamily: 'PlusJakartaSans-Regular',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#0066ff',
  },
}); 