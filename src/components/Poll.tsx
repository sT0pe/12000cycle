import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type VotesType = {
	[index: number]: number;
};

type PollParams = {
	id: string;
	question: string;
	options: string[];
}

export default function Poll ({ id, question, options }: PollParams) {
	const { t } = useTranslation();

  const [voted, setVoted] = useState<boolean>(false);
  const [selection, setSelection] = useState<number | null>(null);
  const [votes, setVotes] = useState<VotesType>({});

  const STORAGE_KEY = `poll-${id}`;

  useEffect(() => {
    const initializePoll = async () => {
			const defaultVotes: VotesType = options.reduce((acc, _, index) => {
        acc[index] = 0;
        return acc;
      }, {} as VotesType);

      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);

        if (stored) {
          const parsed = JSON.parse(stored);

          setVotes(parsed.votes);
          setVoted(true);
          setSelection(parsed.selection);
        } else {
          setVotes(defaultVotes);
        }
      } catch (e) {
				setVotes(defaultVotes);
      }
    };

    initializePoll();
  }, []);

  const handleVote = async (index: number) => {
    if (voted) return;

    const newVotes = {
      ...votes,
      [index]: votes[index] + 1,
    };

    setVotes(newVotes);
    setSelection(index);
    setVoted(true);

    try {
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ votes: newVotes, selection: index })
      );
    } catch (e) {
    }
  };

  const getTotal = () => Object.values(votes).reduce((sum, count) => sum + count, 0);

  const getPercentage = (index: number) => {
    const total = getTotal();

    if (total === 0) return 0;

    return Math.round((votes[index] / total) * 100);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{t(question)}</Text>

			{options.map((option, index) => (
				<TouchableOpacity
					key={index}
					style={[
						styles.option,
						voted && selection === index ? styles.selected : null
					]}
					onPress={() => handleVote(index)}
					disabled={voted}
				>
					<Text style={styles.optionText}>{t(option)}</Text>

					{voted && (
						<Text style={styles.percentText}>{getPercentage(index)}%</Text>
					)}
				</TouchableOpacity>
			))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1e',
    padding: 20,
    borderRadius: 12,
    margin: 20,
  },
  question: {
    color: 'white',
    fontSize: 18,
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  option: {
    backgroundColor: '#2c2c2e',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  selected: {
    backgroundColor: '#007aff',
  },
  optionText: {
    color: 'white',
    fontSize: 16,
  },
  percentText: {
    color: '#ccc',
    fontSize: 16,
  }
});
