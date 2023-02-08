export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: "/auth/login",
    },
    props: {},
  };
}

export default function index() {
  return <div>index</div>;
}
