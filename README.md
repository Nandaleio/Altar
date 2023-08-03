
# Altar

Commenting tool for audio / image / video / 3D object


## List of the Modes : 
| Event name  | Description |
| :------------- |:-------------|
| `VIEW`   | View the media **without** the comment markers  |
| `COMMENT`| View the media **with** the comment markers     |
| `DELETE` | Delete comment on the media                     |
| `DRAW`   | Draw a shap on 2D media `image / video`     |
| `POINT`  | Point a comment on media that is at least 1D `audio / image / video`|


## List of the dispatched Events : 

### Comment related: 

| Event name        | Description |  Body |
| :-------------    |:-------------:| :--: |
| `comment-added`   | The user added a comment to the current media | [Comment position](#comment-position) |
| `comment-selected`| The user selected a comment                   | ``` {id: string} ``` |
| `comment-delete`  | The user deleted a comment                    | ``` {id: string} ``` |

### Media related

| Event name      | Description | Body |
| :-------------  |:-------------:|:--:|
| `media-loaded`  | The media loaded successfully | - |
| `media-play`    | The media start playing       | Media time before start |
| `media-stop`    | The media stop playing        | Media time at pause |
| `view-changed`  | The media view changed        |  [View details](#view-detail) |
| `reset-view`  | Reset the view         |  - |

#### Comment position {#comment-position}
- Audio: ``` {time: number} ```
- Image: ``` {x: number, y: number} ```
- Video: ``` {x: number, y: number, time: number} ```
- 3D : _Coming soon_
#### View {#view-detail}
- Audio: ``` {time: number} ```
- Image: ``` {x: number, y: number, rotation: number, zoom: number} ```
- Video: ``` {x: number, y: number, rotation: number, zoom: number, time: number} ```
- 3D : _Coming soon_

## Customization :
 Coming soon


## Dependencies

- ThreeJS
- @material/web _(might change)_
