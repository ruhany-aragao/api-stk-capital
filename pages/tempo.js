function Tempo(props) {
  const router = useRouter();
  const dynamicDate = router.query.date;

  return (
    <div>
      <div>{dynamicDate ? dynamicDate : "Carregando..."}</div>
      <div>{dynamicDate ? <Clock date={dynamicDate} /> : <Clock />}</div>
    </div>
  );
}

export default Tempo;
export async function getStaticProps() {
  const dynamicDate = new Date();

  return {
    props: {
      dynamicDate: dynamicDate.toGMTString(),
    },
    revalidate: 1,
  };
}
