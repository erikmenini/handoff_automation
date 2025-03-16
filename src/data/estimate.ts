import { estimateModel } from '../interface/estimate.model'

export function bathroomEstimate(): estimateModel {
  const bathroomEstimate: estimateModel = {
    message: "This bathroom remodel is 7'x10' with 8' ceilings. We'll be removing and replacing: shower pan, shower wall tile, floor tile, shower doors, toilet, vanity, sink, lights, and fan. No layout changes. Repaint with 2 coats. Use high end finishes."
  }
  return bathroomEstimate
}

export function bathroomEstimateEdit(): estimateModel {
    const bathroomEstimateEdit: estimateModel = {
      message: "Actually, I made a mistake. The size is 10'x15'. The rest will be the same. Please make another estimate."
    }
    return bathroomEstimateEdit
  }


  

