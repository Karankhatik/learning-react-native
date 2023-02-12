export default function App() {
  return (
    <View>
      <Text>Rivising the React concept</Text>
      <Cat name="kitty" />
      <Cat name="kitto" />
    </View>
  )
}

const Cat = (props) => {
  const [isHungry, setHungry] = useState(true)

  return (
    <>
      <View>
        <Text>
          I m {props.name} and i m {isHungry ? 'Hungry' : 'Happy'}
        </Text>
        <Button
          onPress={() => setHungry(false)}
          title={isHungry ? ' Please fed me milk i m hungry' : 'Thankyou'}
          disabled={!isHungry}
        />
      </View>
    </>
  )
}
