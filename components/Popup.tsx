import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

interface PopupProps {
  visible: boolean;
  title?: string;
  message: string;
  type?: 'info' | 'warning' | 'error'; // Type of popup
  singleButton?: boolean; // Whether it has a single button
  primaryButtonText?: string; // Text for the primary button
  secondaryButtonText?: string; // Text for the secondary button (if any)
  onPrimaryButtonPress: (event: GestureResponderEvent) => void; // Primary button action
  onSecondaryButtonPress?: (event: GestureResponderEvent) => void; // Secondary button action
  onClose: () => void; // Close the popup
}

const Popup: React.FC<PopupProps> = ({
  visible,
  title = 'Notification',
  message,
  type = 'info',
  singleButton = true,
  primaryButtonText = 'OK',
  secondaryButtonText = 'Cancel',
  onPrimaryButtonPress,
  onSecondaryButtonPress,
  onClose,
}) => {
  // Color configuration based on popup type
  const colors = {
    info: '#007BFF',
    warning: '#FFC107',
    error: '#FF3D00',
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.popupContainer}>
          <View
            style={[
              styles.header,
              { backgroundColor: colors[type] || colors.info },
            ]}
          >
            <Text style={styles.headerText}>{title}</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.message}>{message}</Text>
          </View>
          <View style={styles.footer}>
            {singleButton ? (
              <TouchableOpacity
                style={[styles.button, styles.primaryButton]}
                onPress={onPrimaryButtonPress}
              >
                <Text style={styles.buttonText}>{primaryButtonText}</Text>
              </TouchableOpacity>
            ) : (
              <>
                <TouchableOpacity
                  style={[styles.button, styles.secondaryButton]}
                  onPress={onSecondaryButtonPress}
                >
                  <Text style={styles.buttonText}>{secondaryButtonText}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.primaryButton]}
                  onPress={onPrimaryButtonPress}
                >
                  <Text style={styles.buttonText}>{primaryButtonText}</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  header: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    minWidth: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#007BFF',
  },
  secondaryButton: {
    backgroundColor: '#6c757d',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Popup;
