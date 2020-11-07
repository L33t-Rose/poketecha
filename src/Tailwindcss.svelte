<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .red-card {
    @apply flex flex-col mb-6 rounded-md  bg-red-200  p-4;
  }

  .offset {
    @apply transform translate-x-4 -translate-y-2;
  }

  .btn{
    
  }
  .btn:hover{
    @apply bg-red-500;
  }

  .btn:active svg,
  .btn:focus svg{
    @apply bg-red-500;
    outline:none;
  }

 
  
</style>
