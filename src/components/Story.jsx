import { MyTitle } from "./MyTitle";

export function Story() {
  return (
    <div className="container mx-auto">
      <div className="border-b border-grey-lighter py-16 lg:py-20">
        <div className="flex items-center pb-6">
        <MyTitle imagepath='/assets/img/icon-story.png' title='My Story' />
        </div>
        <div>
          <p className="font-body font-light text-primary dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            mauris cursus mattis molestie. Et leo duis ut diam. Sit amet tellus
            cras adipiscing enim eu turpis. Adipiscing at in tellus integer
            feugiat.
            <br />
            <br />
            Maecenas accumsan lacus vel facilisis. Eget egestas purus viverra
            accumsan in nisl nisi scelerisque eu. Non tellus orci ac auctor
            augue mauris augue neque gravida. Auctor augue mauris augue neque
            gravida in fermentum et sollicitudin. Tempus urna et pharetra
            pharetra massa massa ultricies mi quis. Amet mauris commodo quis
            imperdiet massa. Integer vitae justo eget magna fermentum iaculis eu
            non.
          </p>
        </div>
      </div>
    </div>
  );
}
