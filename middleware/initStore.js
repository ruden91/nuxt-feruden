let alreadyDone = false;

export default function(context) {
  console.log("initial~!");
  if (alreadyDone) {
    return;
  }

  alreadyDone = true;
}
