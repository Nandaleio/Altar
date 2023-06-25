import { Mesh, TextureLoader, PlaneGeometry, MeshBasicMaterial } from "three";

export function createPlaneWithImage(url: string, width:number, heigth: number): Mesh {
    const textureLoader = new TextureLoader();
    const texture = textureLoader.load(url);
    const geometry = new PlaneGeometry(width, heigth);
    const material = new MeshBasicMaterial({ map: texture });
    return new Mesh(geometry, material);
  }