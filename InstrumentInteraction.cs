
using UnityEngine;

public class InstrumentInteraction : MonoBehaviour
{
    public AudioSource audioSource;
    public GameObject miniInstrumentPrefab;
    public Transform spawnPoint;

    public int numberToSpawn = 5;
    public float launchForce = 2f;
    public float spread = 1f;

    private void OnMouseDown()
    {
        PlayInstrument();
    }

    public void PlayInstrument()
    {
        // tocar som
        if (audioSource != null)
        {
            audioSource.Play();
        }

        // lançar miniaturas
        if (miniInstrumentPrefab != null && spawnPoint != null)
        {
            for (int i = 0; i < numberToSpawn; i++)
            {
                GameObject mini = Instantiate(
                    miniInstrumentPrefab,
                    spawnPoint.position,
                    Random.rotation
                );

                Rigidbody rb = mini.GetComponent<Rigidbody>();

                if (rb != null)
                {
                    Vector3 randomDirection = new Vector3(
                        Random.Range(-spread, spread),
                        Random.Range(0.5f, spread + 0.5f),
                        Random.Range(-spread, spread)
                    );

                    rb.AddForce(randomDirection * launchForce, ForceMode.Impulse);
                }

                Destroy(mini, 4f);
            }
        }
    }
}