export default () => {
 return (
  <div>
   <Link href="/about/">
    <a data-cy="nav-item">About</a>
   </Link>
   <button onClick={() => console.log('done')} data-cy="mmenu-btn">
    MMenu
   </button>
   <h1 data-testid="my-test-id">Welcome</h1>
  </div>
 );
};
