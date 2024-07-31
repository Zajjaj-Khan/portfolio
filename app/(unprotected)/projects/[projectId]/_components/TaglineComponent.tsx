interface TaglineProp {
    tagline: any;
  }

export default function TaglineComponent({tagline}:TaglineProp) {
  return (
    <p className="text-center md:text-left pb-6 px-4 text-md opacity-45">{tagline}</p>
  )
}
