

const checkAir = function (samples, threshold) {
    let dirtyCount = 0;
    for (let sample in samples) {
        // threshhold * total = max 'dirty'
        if(samples[sample] === 'dirty') {
            dirtyCount += 1;
        }
        if(dirtyCount >= (threshold * samples.length)) {
            return 'Polluted';
        }
    }
    return 'Clean';
  };
  
  console.log(checkAir(
    ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
    0.3
  ));
  
  console.log(checkAir(
    ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
    0.25
  ));
  
  console.log(checkAir(
    ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
    0.9
  ))
  