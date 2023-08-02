
# Altar

Commenting tool for audio / image / video / 3D object


## List of the Modes : 
| Event name  | Description |
| :------------- |:-------------|
| `VIEW`   | View the media **without** the comment markers  |
| `COMMENT`| View the media **with** the comment markers     |
| `DELETE` | Delete comment on the media                     |
| `DRAW`   | Draw a shap on 2D media `eg: image / video`     |
| `POINT`  | Point a comment on media that is at least 1D `eg: audio / image / video`|

_You **can** combine them_

## List of the returned Events : 

| Event name  | Description |
| :------------- |:-------------:|
| `comment-added`   | The user added a comment to the current media |
| `comment-selected`| The user selected a comment                   |
| `comment-delete`  | The user deleted a comment                    |
| `comment-delete`  | The user deleted a comment                    |


## RoadMap :
- [ ] Timeline comment for audio
- [ ] Image comment
- [ ] Timeline + Image comment for Video
- [ ] Handle 3D Object


## Customization :
 Soon


## Dependencies

-   ThreeJS
-   @material/web