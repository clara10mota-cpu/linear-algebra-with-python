
using UnityEngine;

public class AlienFloat : MonoBehaviour
{
    public float amplitude = 0.5f;
    public float speed = 1f;
    public float rotationSpeed = 15f;

    private Vector3 startPosition;

    void Start()
    {
        startPosition = transform.position;
    }

    void Update()
    {
        float newY = startPosition.y + Mathf.Sin(Time.time * speed) * amplitude;

        transform.position = new Vector3(
            startPosition.x,
            newY,
            startPosition.z
        );

        transform.Rotate(Vector3.up * rotationSpeed * Time.deltaTime);
    }
}